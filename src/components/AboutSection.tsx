
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h2 className="text-4xl font-bold text-gradient mb-6 leading-tight letter-spacing-wide">About Our Lab</h2>
            <p className="text-lg font-medium text-gray-800 mb-6">
              The NAI Engineering Teaching Lab is a new combined teaching and laboratory space in the Light Engineering Building.
            </p>
            <div className="space-y-4 text-gray-600">
              <p className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                The laboratory will be used by Stony Brook's current Electrical and Computer Engineering students, and will also be used as part of the University's outreach activity to expose middle and high school students to electrical and computer engineering topics.
              </p>
              <p className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                Visiting grade school students experiment with electricity and build circuits during day-long field trips to the University, getting hands-on experience with cutting-edge equipment.
              </p>
              <p className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                The lab was made possible through the generous support of North Atlantic Industries, demonstrating their commitment to the future of engineering education.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 animate-fade-in">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-300">
              <AspectRatio ratio={16/9} className="bg-gray-100">
                <img 
                  src="/lovable-uploads/981cfa63-f675-41ce-9af7-5a8628bda89c.png" 
                  alt="NAI Lab Ribbon Cutting Ceremony" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <div className="bg-sbu-red p-4 text-white text-sm">
                <p className="font-medium">Ribbon cutting ceremony for the North Atlantic Industries Engineering Teaching Lab</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
