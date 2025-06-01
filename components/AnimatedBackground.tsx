
import React, { useRef, useEffect, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const PARTICLE_COLOR = 'rgba(209, 213, 219, 0.4)'; // gray-300 with alpha
const LINE_COLOR_BASE = 'rgba(209, 213, 219,'; // gray-300 base for dynamic alpha
const MAX_LINE_DISTANCE = 120;
const PARTICLE_RADIUS = 1.5;

// --- Parameters for water-like movement ---
const INITIAL_SPEED_FACTOR = 0.1; // Reduced initial random speed
const DAMPING_FACTOR = 0.98; // Simulates water resistance
const FLOW_FIELD_STRENGTH = 0.02; // How strongly particles are affected by flow
const FLOW_FIELD_SCALE = 0.005; // Scale of the flow pattern
const FLOW_FIELD_TIME_EVOLUTION = 0.0005; // How quickly the flow pattern changes
const MAX_PARTICLE_SPEED = 0.5; // Maximum speed a particle can reach
// --- End parameters ---

let time = 0; // Time variable for evolving flow field

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameIdRef = useRef<number | null>(null);

  const createParticles = useCallback((canvas: HTMLCanvasElement, numParticles: number) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < numParticles; i++) {
      newParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * INITIAL_SPEED_FACTOR,
        vy: (Math.random() - 0.5) * INITIAL_SPEED_FACTOR,
        radius: PARTICLE_RADIUS,
      });
    }
    particlesRef.current = newParticles;
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    time += 1; // Increment time for flow field evolution

    particlesRef.current.forEach(p => {
      // Apply flow field
      const angle = (Math.sin(p.x * FLOW_FIELD_SCALE + time * FLOW_FIELD_TIME_EVOLUTION) +
                     Math.cos(p.y * FLOW_FIELD_SCALE + time * FLOW_FIELD_TIME_EVOLUTION)) * Math.PI;
      const flowX = Math.cos(angle) * FLOW_FIELD_STRENGTH;
      const flowY = Math.sin(angle) * FLOW_FIELD_STRENGTH;

      p.vx += flowX;
      p.vy += flowY;

      // Apply damping
      p.vx *= DAMPING_FACTOR;
      p.vy *= DAMPING_FACTOR;

      // Clamp speed
      const speed = Math.hypot(p.vx, p.vy);
      if (speed > MAX_PARTICLE_SPEED) {
        p.vx = (p.vx / speed) * MAX_PARTICLE_SPEED;
        p.vy = (p.vy / speed) * MAX_PARTICLE_SPEED;
      }
      
      // Update position
      p.x += p.vx;
      p.y += p.vy;

      // Boundary check (wrap around)
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = PARTICLE_COLOR;
      ctx.fill();
    });

    // Draw lines
    for (let i = 0; i < particlesRef.current.length; i++) {
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const p1 = particlesRef.current[i];
        const p2 = particlesRef.current[j];
        const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);

        if (distance < MAX_LINE_DISTANCE) {
          const opacity = 1 - distance / MAX_LINE_DISTANCE;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `${LINE_COLOR_BASE} ${opacity * 0.3})`; // Make lines more subtle
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animationFrameIdRef.current = requestAnimationFrame(draw);
  }, []);

  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    const logicalWidth = rect.width;
    const logicalHeight = rect.height;

    const numParticles = Math.floor((logicalWidth * logicalHeight) / 15000);
    createParticles(canvas, Math.max(30, Math.min(100, numParticles))); 

    if (animationFrameIdRef.current) {
      cancelAnimationFrame(animationFrameIdRef.current);
    }
    time = 0; 
    draw();
  }, [createParticles, draw]);


  useEffect(() => {
    setupCanvas();
    window.addEventListener('resize', setupCanvas);

    return () => {
      window.removeEventListener('resize', setupCanvas);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [setupCanvas]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
      style={{ pointerEvents: 'none' }} // Added this line
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;
