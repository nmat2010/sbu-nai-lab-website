
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
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const lines = [
    "WELCOME TO",
    "NORTH ATLANTIC INDUSTRIES",
    "ENGINEERING TEACHING LAB"
  ];
  
  useEffect(() => {
    let currentIndex = 0;
    let typingInterval: number | null = null;
    
    if (isTyping) {
      typingInterval = window.setInterval(() => {
        if (currentIndex <= lines[currentLine].length) {
          setDisplayText(lines[currentLine].substring(0, currentIndex));
          currentIndex++;
        } else {
          // Finished typing current line
          clearInterval(typingInterval as number);
          
          // Wait before moving to next line
          setTimeout(() => {
            if (currentLine < lines.length - 1) {
              setCurrentLine(prev => prev + 1);
              setDisplayText("");
            } else {
              // Finished all lines, reset after a pause
              setTimeout(() => {
                setCurrentLine(0);
                setDisplayText("");
              }, 2000);
            }
            currentIndex = 0;
          }, 1500);
        }
      }, 100);
    }
    
    return () => {
      if (typingInterval) {
        clearInterval(typingInterval);
      }
    };
  }, [currentLine, isTyping, lines]);

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
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl text-shadow-subtle">
            <span className="inline-block running-text">
              {displayText}
              <span className="animate-blink">|</span>
            </span>
          </h1>
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
