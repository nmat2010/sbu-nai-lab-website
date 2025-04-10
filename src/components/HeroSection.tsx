
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/349af6f0-57a1-4871-ab78-dc65f6e2c82a.png"
          alt="Engineering Lab"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-start justify-center h-[500px]">
        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-4 animate-fade-in">
          WELCOME TO
        </h1>
        <div className="animate-slide-in">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl mb-2">
            NORTH ATLANTIC INDUSTRIES
          </h2>
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl mb-8">
            ENGINEERING TEACHING LAB
          </h2>
        </div>
        <p className="text-xl text-white mb-8 max-w-xl animate-slide-in" style={{ animationDelay: '200ms' }}>
          for the next generation of innovative engineers
        </p>
        <div className="flex space-x-4 animate-slide-in" style={{ animationDelay: '300ms' }}>
          <Button className="bg-sbu-red hover:bg-sbu-darkred text-white">Schedule a Session</Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-sbu-red">Learn More</Button>
        </div>
        <div className="mt-12 animate-slide-in" style={{ animationDelay: '400ms' }}>
          <img 
            src="/lovable-uploads/349af6f0-57a1-4871-ab78-dc65f6e2c82a.png" 
            alt="North Atlantic Industries Logo" 
            className="h-16 md:h-20"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
