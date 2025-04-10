
import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-sbu-red text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About</h2>
            <p className="text-xl font-semibold mb-6">
              The NAI Engineering Teaching Lab is a new combined teaching and laboratory space in the Light Engineering Building.
            </p>
            <p className="mb-4">
              The laboratory will be used by Stony Brook's current Electrical and Computer Engineering students, and will also be used as part of the University's outreach activity to expose middle and high school students to electrical and computer engineering topics.
            </p>
            <p>
              Visiting grade school students experiment with electricity and build circuits during day-long field trips to the University.
            </p>
          </div>
          <div className="mt-12 md:mt-0">
            <img 
              src="/lovable-uploads/349af6f0-57a1-4871-ab78-dc65f6e2c82a.png" 
              alt="Lab Equipment" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
