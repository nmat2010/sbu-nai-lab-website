
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-sbu-red to-sbu-darkred text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">About The NAI Engineering Teaching Lab</h1>
            <p className="text-xl max-w-3xl animate-fade-in" style={{ animationDelay: '100ms' }}>
              Empowering the next generation of electrical and computer engineers through hands-on learning and innovation.
            </p>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
              <div>
                <div className="rounded-2xl overflow-hidden shadow-xl transform transition-all hover:shadow-2xl duration-300">
                  <AspectRatio ratio={4/3}>
                    <img 
                      src="/lovable-uploads/981cfa63-f675-41ce-9af7-5a8628bda89c.png" 
                      alt="NAI Lab Ribbon Cutting Ceremony" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <div className="bg-sbu-red p-4 text-white">
                    <p className="font-medium">Official ribbon cutting ceremony for the North Atlantic Industries Engineering Teaching Lab</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-sbu-red mb-6">Our Mission</h2>
                <p className="text-gray-800 mb-6 text-lg">
                  The North Atlantic Industries Engineering Teaching Lab is dedicated to providing state-of-the-art facilities and resources for students in electrical and computer engineering at Stony Brook University.
                </p>
                <p className="text-gray-700 mb-6">
                  Our mission is to create an environment where students can gain hands-on experience with cutting-edge technology and develop the skills necessary for successful careers in engineering.
                </p>
                <p className="text-gray-700">
                  We also aim to inspire the next generation of engineers through outreach programs for middle and high school students, introducing them to the exciting world of electrical and computer engineering.
                </p>
              </div>
            </div>
          
            {/* Our Facilities Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-sbu-red mb-6">Our Facilities</h2>
              <p className="text-gray-800 mb-6">
                The NAI Engineering Teaching Lab is equipped with modern facilities designed to support a wide range of educational and research activities:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 shadow-inner">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-sbu-red flex-shrink-0 mt-1">•</span>
                    <span>12 electrical test stations with advanced equipment including touchscreen oscilloscopes, precision multimeters, and triple power supplies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-sbu-red flex-shrink-0 mt-1">•</span>
                    <span>8 3D printers for rapid prototyping, allowing students to quickly translate designs into physical objects</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-sbu-red flex-shrink-0 mt-1">•</span>
                    <span>8 circuit assembly workstations with temperature-controlled soldering equipment and comprehensive toolsets</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-sbu-red flex-shrink-0 mt-1">•</span>
                    <span>Computer workstations with professional engineering software</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-sbu-red flex-shrink-0 mt-1">•</span>
                    <span>Collaborative working spaces for team projects</span>
                  </li>
                </ul>
              </div>
            </div>
          
            {/* Our Sponsors Section */}
            <div>
              <h2 className="text-3xl font-bold text-sbu-red mb-6">Our Sponsors</h2>
              <p className="text-gray-800 mb-8">
                The NAI Engineering Teaching Lab is made possible through the generous support of North Atlantic Industries and other industry partners committed to advancing engineering education.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img src="/lovable-uploads/d0a89636-3952-44ec-b347-d578b260fd86.png" alt="North Atlantic Industries" className="h-12" />
                </div>
                <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img src="/lovable-uploads/44e08896-ceb9-4d4e-a44b-612315f5b3d2.png" alt="Stony Brook University" className="h-12" />
                </div>
                {/* Add more sponsor logos as needed */}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
