
import React from 'react';

const HeroContent: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
      <h1 
        className="text-white text-6xl sm:text-7xl md:text-8xl font-thin tracking-[0.15em] sm:tracking-[0.2em] leading-tight"
        style={{ textShadow: '0 0 10px rgba(255,255,255,0.1)' }} // Subtle glow for better readability
      >
        LEO JOSEPH
      </h1>
      <div className="w-16 sm:w-20 h-px bg-gray-400 my-5 sm:my-7"></div>
      <h2 
        className="text-gray-300 text-lg sm:text-xl md:text-2xl font-light tracking-[0.3em] sm:tracking-[0.4em]"
        style={{ textShadow: '0 0 8px rgba(200,200,200,0.1)' }}
      >
        DESIGN
      </h2>
    </div>
  );
};

export default HeroContent;
