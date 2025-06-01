
import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import HeroContent from './components/HeroContent';
import WebGLWaterEffect from './components/WebGLWaterEffect'; // Updated import

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-slate-900 overflow-hidden">
      <WebGLWaterEffect /> {/* Replaced component */}
      <AnimatedBackground />
      <HeroContent />
    </div>
  );
};

export default App;