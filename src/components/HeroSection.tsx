
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Helper function to wrap each letter in a span with staggered animation delay
const AnimatedLetters = ({ text, baseDelay = 0 }: { text: string, baseDelay?: number }) => {
  return (
    <span className="animate-letters">
      {text.split('').map((letter, index) => (
        <span 
          key={index} 
          style={{ 
            animationDelay: `${baseDelay + (index * 0.05)}s`,
            display: letter === ' ' ? 'inline' : 'inline-block'
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
};

const HeroSection = () => {
  const [displayTitle, setDisplayTitle] = useState("");
  const fullTitle = "WELCOME TO";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullTitle.length) {
        setDisplayTitle(fullTitle.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        // Reset after a pause to restart the animation
        setTimeout(() => {
          setDisplayTitle("");
          currentIndex = 0;
        }, 2000);
      }
    }, 150);
    
    return () => {
      clearInterval(interval);
    };
  }, [displayTitle]);

  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/77ce2bb2-4259-4af6-8411-13241b7b30df.png"
          alt="Engineering Lab"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-start justify-center h-[500px]">
        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-4 animate-fade-in text-shadow-subtle">
          <span className="inline-block running-text">
            {displayTitle}
            <span className="animate-blink">|</span>
          </span>
        </h1>
        <div className="animate-slide-in">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl mb-2 text-gradient letter-spacing-wide">
            NORTH ATLANTIC INDUSTRIES
          </h2>
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl mb-8 text-3d">
            ENGINEERING TEACHING LAB
          </h2>
        </div>
        <p className="text-xl text-white mb-8 max-w-xl animate-slide-in text-glow" style={{ animationDelay: '200ms' }}>
          for the next generation of innovative engineers
        </p>
        <div className="animate-slide-in" style={{ animationDelay: '300ms' }}>
          <Link to="/schedule">
            <Button className="bg-sbu-red hover:bg-sbu-darkred text-white font-semibold hover-lift pulse-subtle">Schedule a Session</Button>
          </Link>
        </div>
        <div className="mt-12 flex items-center space-x-6 animate-slide-in" style={{ animationDelay: '400ms' }}>
          <img 
            src="/lovable-uploads/44e08896-ceb9-4d4e-a44b-612315f5b3d2.png" 
            alt="Stony Brook University Logo" 
            className="h-16 md:h-20 hover-scale"
          />
          <img 
            src="/lovable-uploads/d0a89636-3952-44ec-b347-d578b260fd86.png" 
            alt="North Atlantic Industries Logo" 
            className="h-16 md:h-20 hover-scale"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
