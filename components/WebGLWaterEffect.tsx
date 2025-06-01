
import React, { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';

const SIMULATION_RESOLUTION_SCALE = 0.5; 
const DAMPING_FACTOR = 0.994; 
const MOUSE_RADIUS = 0.018; 
const MOUSE_STRENGTH = 0.35; 
const DISTORTION_STRENGTH = 0.055; 
const FRESNEL_POWER = 3.5; 

// --- Shaders ---

const commonVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const updateFragmentShader = `
  uniform sampler2D uPrevState; 
  uniform vec2 uResolution;     
  uniform vec2 uMousePos;       
  uniform float uMouseActive;   
  uniform float uBrushRadius;
  uniform float uWaveStrength;
  uniform float uDamping;

  varying vec2 vUv;

  void main() {
    vec2 texel = 1.0 / uResolution;
    
    vec2 O = texture2D(uPrevState, vUv).xy;

    float L = texture2D(uPrevState, vUv + vec2(-texel.x, 0.0)).x;
    float R = texture2D(uPrevState, vUv + vec2(texel.x, 0.0)).x;
    float T = texture2D(uPrevState, vUv + vec2(0.0, texel.y)).x;
    float B = texture2D(uPrevState, vUv + vec2(0.0, -texel.y)).x;
    
    float laplacian = (L + R + T + B) - 4.0 * O.x;
    
    float newVelocity = O.y + laplacian * 0.110; 
    float newHeight = O.x + newVelocity;

    newHeight = clamp(newHeight, -0.25, 0.25);
    newVelocity = clamp(newVelocity, -0.05, 0.05);

    newHeight *= uDamping;
    newVelocity *= uDamping;

    if (uMouseActive > 0.5) {
      float distToMouse = distance(vUv, uMousePos);
      if (distToMouse < uBrushRadius) {
        float dropFactor = smoothstep(uBrushRadius, 0.0, distToMouse);
        newHeight += uWaveStrength * dropFactor * 0.6; 
        newVelocity += uWaveStrength * dropFactor * 0.05; 
      }
    }
    
    gl_FragColor = vec4(newHeight, newVelocity, 0.0, 1.0);
  }
`;

const displayFragmentShader = `
  uniform sampler2D uRippleMap; 
  uniform sampler2D uBackgroundTexture;
  uniform sampler2D uNoiseTexture;
  uniform vec2 uSimulationResolution; 
  uniform float uDistortionStrength;
  uniform float uFresnelPower;
  uniform float uTime; 

  varying vec2 vUv;

  // Simple pseudo-random function
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  // Function to draw a shooting star
  // Returns color of the star at current vUv
  vec3 drawShootingStar(vec2 uv, vec2 pos, vec2 dir, float len, float intensity, vec3 color) {
    vec2 to_uv = uv - pos;
    float proj = dot(to_uv, dir); 
    
    if (proj < 0.0 || proj > len) return vec3(0.0); 

    float dist_to_line = length(to_uv - proj * dir); 
    
    float head_size = 0.0025; // Slightly smaller head for sharper look
    float tail_falloff = 0.004; 

    float brightness = smoothstep(tail_falloff + head_size, head_size, dist_to_line);
    
    brightness *= (1.0 - pow(proj / len, 1.5)); // Adjusted falloff along length for a bit more body

    return color * brightness * intensity;
  }


  vec3 getNormal(sampler2D heightMap, vec2 uv, vec2 mapResolution) {
      vec2 texel = 1.0 / mapResolution;
      float hL = texture2D(heightMap, uv - vec2(texel.x, 0.0)).x;
      float hR = texture2D(heightMap, uv + vec2(texel.x, 0.0)).x;
      float hD = texture2D(heightMap, uv - vec2(0.0, texel.y)).x;
      float hU = texture2D(heightMap, uv + vec2(0.0, texel.y)).x;
      
      vec3 normal = vec3(hL - hR, hD - hU, texel.x * 3.5); 
      return normalize(normal);
  }

  void main() {
    vec3 normal = getNormal(uRippleMap, vUv, uSimulationResolution);
    float rippleHeight = texture2D(uRippleMap, vUv).x;
    float rippleHeightAbs = abs(rippleHeight);
    
    vec2 bgUv = vUv + vec2(uTime * -0.003, uTime * -0.0015); 
    bgUv = mod(bgUv, 1.0); 

    vec2 distortedUv = bgUv + normal.xy * uDistortionStrength;
    vec4 backgroundColorTex = texture2D(uBackgroundTexture, distortedUv);
    
    vec3 sceneColor = backgroundColorTex.rgb;

    // --- Add Moving Objects (Shooting Stars) ---
    const int NUM_STARS = 6; // Increased number of shooting stars
    for (int i = 0; i < NUM_STARS; ++i) {
        float i_float = float(i);
        
        float starCycleDuration = 6.0 + random(vec2(i_float, 0.0)) * 7.0; 
        float currentTimeInCycle = mod(uTime * (0.25 + random(vec2(i_float, 1.0)) * 0.15), starCycleDuration);

        vec2 startPos = vec2(0.0, random(vec2(i_float, 2.0)) * 0.9 + 0.05); 
        float directionX = 1.0;
        if (random(vec2(i_float, 2.5)) > 0.5) { 
            startPos.x = 1.0;
            directionX = -1.0;
        }
        startPos.y = clamp(startPos.y, 0.05, 0.95); // Ensure stars start within bounds better

        vec2 velocity = normalize(vec2(directionX * (0.7 + random(vec2(i_float, 2.8)) * 0.6) , (random(vec2(i_float, 3.0)) - 0.5) * 0.4));
        
        float progress = currentTimeInCycle / starCycleDuration; 
        vec2 currentPos = startPos + velocity * progress * (1.0 + random(vec2(i_float, 3.5)) * 0.7); // More variation in traversal

        float tailLength = 0.04 + random(vec2(i_float, 4.0)) * 0.12;
        float starIntensity = 0.7 + random(vec2(i_float, 5.0)) * 0.9;
        
        vec3 baseStarColor = vec3(0.8, 0.85, 0.95); // Icy white-blue base
        float r_mod = random(vec2(i_float, 6.0)) * 0.4 - 0.2; 
        float g_mod = random(vec2(i_float, 7.0)) * 0.3 - 0.15; 
        float b_mod = random(vec2(i_float, 8.0)) * 0.2 - 0.1;
        vec3 starColorVariant = baseStarColor + vec3(r_mod, g_mod, b_mod);
        starColorVariant = clamp(starColorVariant, vec3(0.65), vec3(1.0)); // Ensure bright and valid colors

        sceneColor += drawShootingStar(vUv, currentPos, velocity, tailLength, starIntensity, starColorVariant);
    }
    // --- End Moving Objects ---

    vec3 finalRgb = sceneColor;


    vec3 viewDir = vec3(0.0, 0.0, 1.0); 
    float fresnelTerm = pow(1.0 - abs(dot(viewDir, normal)), uFresnelPower);
    fresnelTerm = clamp(fresnelTerm * 1.5, 0.0, 1.0); 
    vec3 fresnelColor = vec3(0.8, 0.85, 0.9); 
    finalRgb = mix(finalRgb, fresnelColor, fresnelTerm * 0.25);

    vec3 lightDir = normalize(vec3(0.5, 0.6, 1.0)); 
    vec3 halfVector = normalize(lightDir + viewDir);
    float specularAngle = max(0.0, dot(normal, halfVector));
    float specularIntensity = pow(specularAngle, 96.0); 

    specularIntensity *= smoothstep(0.005, 0.06, rippleHeightAbs); 
    specularIntensity *= (0.4 + texture2D(uNoiseTexture, vUv * 12.0 + normal.xy * 0.3 + uTime * 0.02).r * 0.9);

    vec3 specularColor = vec3(1.0, 1.0, 1.0) * specularIntensity * 1.1; 
    finalRgb += specularColor;
    
    float generalNoiseVal = texture2D(uNoiseTexture, vUv * 5.0 - uTime * 0.005).r;
    finalRgb += (generalNoiseVal - 0.5) * 0.01;
    
    gl_FragColor = vec4(clamp(finalRgb, 0.0, 1.0), backgroundColorTex.a);
  }
`;

// --- Component ---
const WebGLWaterEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const threeObjectsRef = useRef<any>({}); 

  const createNoiseTexture = useCallback(() => {
    const size = 128;
    const data = new Uint8Array(size * size * 4);
    for (let i = 0; i < size * size; i++) {
      const random = Math.random() * 255;
      data[i * 4 + 0] = random;
      data[i * 4 + 1] = random;
      data[i * 4 + 2] = random;
      data[i * 4 + 3] = 255;
    }
    const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
    texture.needsUpdate = true;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }, []);
  
  const createBackgroundTexture = useCallback(() => {
    const size = 2048; // Increased from 1024 to 2048 for higher resolution
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d')!;
    
    // Dark base color for deep space
    context.fillStyle = 'rgb(5, 5, 20)'; 
    context.fillRect(0, 0, size, size);

    // More complex nebulae
    for (let i = 0; i < 8; i++) { // Increased nebula layers
      const x = Math.random() * size;
      const y = Math.random() * size;
      const radius = Math.random() * size * 0.5 + size * 0.25; // Varied radii
      const grad = context.createRadialGradient(x, y, radius * 0.05, x, y, radius);
      
      const rBase = 5;
      const gBase = 10;
      const bBase = 30;

      // Subtle color variations for nebulae
      const r = Math.floor(rBase + Math.random() * 15); // 5-20
      const g = Math.floor(gBase + Math.random() * 25); // 10-35
      const b = Math.floor(bBase + Math.random() * 40); // 30-70
      
      grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${Math.random() * 0.04 + 0.02})`); // Low alpha
      grad.addColorStop(0.5, `rgba(${r * 0.8}, ${g * 0.8}, ${b * 0.8}, ${Math.random() * 0.02 + 0.01})`);
      grad.addColorStop(1, `rgba(${r * 0.5}, ${g * 0.5}, ${b * 0.5}, 0)`);
      context.fillStyle = grad;
      context.fillRect(0, 0, size, size);
    }

    const drawStars = (count: number, minRadius: number, maxRadius: number, minAlpha: number, maxAlpha: number, baseColor: string = "255,255,255") => {
      for (let i = 0; i < count; i++) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        const r = Math.random() * (maxRadius - minRadius) + minRadius;
        const alpha = Math.random() * (maxAlpha - minAlpha) + minAlpha;
        context.beginPath();
        context.arc(x, y, r, 0, Math.PI * 2);
        context.fillStyle = `rgba(${baseColor}, ${alpha})`;
        context.fill();
      }
    };

    // Enhanced star layers (counts will scale with new 'size')
    drawStars(size * 3, 0.1, 0.3, 0.1, 0.3, "180,190,210"); 
    drawStars(size * 2, 0.2, 0.5, 0.2, 0.5, "200,210,230"); 
    drawStars(Math.floor(size / 1.5), 0.4, 0.8, 0.3, 0.6, "220,225,240"); 
    drawStars(Math.floor(size / 8), 0.6, 1.2, 0.5, 0.8, "230,235,255");   

    // Prominent foreground stars with glow
    context.shadowColor = `rgba(200, 220, 255, 0.4)`; 
    for (let i = 0; i < Math.floor(size / 40); i++) { 
        const x = Math.random() * size;
        const y = Math.random() * size;
        const r = Math.random() * 1.2 + 0.7; 
        const starAlpha = Math.random() * 0.35 + 0.65;
        
        context.shadowBlur = r * (4 + Math.random() * 3); 

        context.beginPath();
        context.arc(x, y, r, 0, Math.PI * 2);
        
        const cR = 240 + Math.floor(Math.random()*15);
        const cG = 240 + Math.floor(Math.random()*15);
        const cB = 255;
        context.fillStyle = `rgba(${cR},${cG},${cB}, ${starAlpha})`;
        context.fill();
    }
    context.shadowBlur = 0; // Reset shadow


    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping; 
    texture.wrapT = THREE.RepeatWrapping; 
    return texture;
  }, []);

  const resizeThree = useCallback((canvas: HTMLCanvasElement) => {
    const { renderer, updateMaterial, displayMaterial, rtA, rtB, simSize } = threeObjectsRef.current;
    if (!renderer) return;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    renderer.setSize(width, height, false); 

    const simWidth = Math.floor(width * SIMULATION_RESOLUTION_SCALE);
    const simHeight = Math.floor(height * SIMULATION_RESOLUTION_SCALE);
    if (rtA && rtB) {
        rtA.setSize(simWidth, simHeight);
        rtB.setSize(simWidth, simHeight);
    }
    if (updateMaterial) {
        updateMaterial.uniforms.uResolution.value.set(simWidth, simHeight);
    }
    if (displayMaterial) {
        displayMaterial.uniforms.uSimulationResolution.value.set(simWidth, simHeight); 
    }
    if (simSize) simSize.set(simWidth, simHeight);
  }, []);

  const initThree = useCallback((canvas: HTMLCanvasElement) => {
    const {
      scene, camera, renderer, rtA, rtB,
      updateMaterial, displayMaterial, noiseTexture, backgroundTexture
    } = threeObjectsRef.current;

    if (renderer) renderer.dispose();
    if (rtA) rtA.dispose();
    if (rtB) rtB.dispose();
    if (updateMaterial) updateMaterial.dispose();
    if (displayMaterial) displayMaterial.dispose();
    if (noiseTexture) noiseTexture.dispose();
    if (backgroundTexture) backgroundTexture.dispose();
    if (scene) { while(scene.children.length > 0){ scene.remove(scene.children[0]); }}

    const newRenderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    newRenderer.setPixelRatio(window.devicePixelRatio);
    
    const newScene = new THREE.Scene();
    const newCamera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0.1, 10);
    newCamera.position.z = 1;

    const simWidth = Math.floor(canvas.clientWidth * SIMULATION_RESOLUTION_SCALE);
    const simHeight = Math.floor(canvas.clientHeight * SIMULATION_RESOLUTION_SCALE);

    const rtParameters = {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType, 
    };
    const newRtA = new THREE.WebGLRenderTarget(simWidth, simHeight, rtParameters);
    const newRtB = new THREE.WebGLRenderTarget(simWidth, simHeight, rtParameters);

    const newNoiseTexture = createNoiseTexture();
    const newBackgroundTexture = createBackgroundTexture();

    const newUpdateMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uPrevState: { value: newRtA.texture },
        uResolution: { value: new THREE.Vector2(simWidth, simHeight) },
        uMousePos: { value: new THREE.Vector2(-1, -1) },
        uMouseActive: { value: 0.0 },
        uBrushRadius: { value: MOUSE_RADIUS },
        uWaveStrength: { value: MOUSE_STRENGTH },
        uDamping: { value: DAMPING_FACTOR },
      },
      vertexShader: commonVertexShader,
      fragmentShader: updateFragmentShader,
    });

    const newDisplayMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uRippleMap: { value: newRtB.texture },
        uBackgroundTexture: { value: newBackgroundTexture },
        uNoiseTexture: { value: newNoiseTexture },
        uSimulationResolution: { value: new THREE.Vector2(simWidth, simHeight) }, 
        uDistortionStrength: { value: DISTORTION_STRENGTH },
        uFresnelPower: { value: FRESNEL_POWER },
        uTime: { value: 0.0 }, 
      },
      vertexShader: commonVertexShader,
      fragmentShader: displayFragmentShader,
      transparent: true, 
    });

    const planeGeometry = new THREE.PlaneGeometry(1, 1);
    const screenQuad = new THREE.Mesh(planeGeometry, newDisplayMaterial);
    newScene.add(screenQuad);

    threeObjectsRef.current = {
      scene: newScene, camera: newCamera, renderer: newRenderer,
      rtA: newRtA, rtB: newRtB,
      updateMaterial: newUpdateMaterial, displayMaterial: newDisplayMaterial,
      screenQuad, noiseTexture: newNoiseTexture, backgroundTexture: newBackgroundTexture,
      simSize: new THREE.Vector2(simWidth, simHeight),
      mouseLastInteractionTime: 0,
      startTime: Date.now(), 
    };
    
    resizeThree(canvas); 
  }, [createNoiseTexture, createBackgroundTexture, resizeThree]);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    initThree(canvas);

    const handleResize = () => resizeThree(canvas);
    window.addEventListener('resize', handleResize);
    
    let animationFrameId: number;
    const renderLoop = () => {
      animationFrameId = requestAnimationFrame(renderLoop);
      const { 
        renderer, scene, camera, rtA, rtB, 
        updateMaterial, displayMaterial, screenQuad, 
        mouseLastInteractionTime, startTime 
      } = threeObjectsRef.current;

      if (!renderer || !scene || !camera || !rtA || !rtB || !updateMaterial || !displayMaterial || !screenQuad) return;

      displayMaterial.uniforms.uTime.value = (Date.now() - startTime) / 1000.0;

      screenQuad.material = updateMaterial;
      updateMaterial.uniforms.uPrevState.value = rtA.texture; 
      
      if (Date.now() - mouseLastInteractionTime > 100) { 
        updateMaterial.uniforms.uMouseActive.value = 0.0;
      }

      renderer.setRenderTarget(rtB); 
      renderer.render(scene, camera);
      renderer.setRenderTarget(null);

      [threeObjectsRef.current.rtA, threeObjectsRef.current.rtB] = [rtB, rtA];
      
      screenQuad.material = displayMaterial;
      displayMaterial.uniforms.uRippleMap.value = rtB.texture; 
      renderer.render(scene, camera);
    };

    renderLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      const { renderer, rtA, rtB, updateMaterial, displayMaterial, noiseTexture, backgroundTexture, scene } = threeObjectsRef.current;
      if (renderer) renderer.dispose();
      if (rtA) rtA.dispose();
      if (rtB) rtB.dispose();
      if (updateMaterial) updateMaterial.dispose();
      if (displayMaterial) displayMaterial.dispose();
      if (noiseTexture) noiseTexture.dispose();
      if (backgroundTexture) backgroundTexture.dispose();
      if (scene) { while(scene.children.length > 0){ scene.remove(scene.children[0]); }}
      threeObjectsRef.current = {};
    };
  }, [initThree, resizeThree]); 

  const updateInteractionPoint = useCallback((
    clientX: number,
    clientY: number,
    currentTarget: HTMLCanvasElement
  ) => {
    const { updateMaterial } = threeObjectsRef.current;
    if (!updateMaterial) return;

    const rect = currentTarget.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width;
    const y = 1.0 - (clientY - rect.top) / rect.height; 

    updateMaterial.uniforms.uMousePos.value.set(x, y);
    updateMaterial.uniforms.uMouseActive.value = 1.0;
    threeObjectsRef.current.mouseLastInteractionTime = Date.now();
  }, []);

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLCanvasElement>) => {
    updateInteractionPoint(event.clientX, event.clientY, event.currentTarget);
  }, [updateInteractionPoint]);

  const handleTouchMove = useCallback((event: React.TouchEvent<HTMLCanvasElement>) => {
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      updateInteractionPoint(touch.clientX, touch.clientY, event.currentTarget);
    }
  }, [updateInteractionPoint]);


  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
      onPointerMove={handlePointerMove}
      onTouchMove={handleTouchMove} 
      aria-hidden="true"
      style={{ touchAction: 'none' }} 
    />
  );
};

export default WebGLWaterEffect;
