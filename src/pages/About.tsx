
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About The NAI Engineering Teaching Lab</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <img 
                src="/lovable-uploads/349af6f0-57a1-4871-ab78-dc65f6e2c82a.png" 
                alt="Lab Facilities" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-sbu-red mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-6">
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
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-sbu-red mb-6">Our Facilities</h2>
            <p className="text-gray-700 mb-6">
              The NAI Engineering Teaching Lab is equipped with modern facilities designed to support a wide range of educational and research activities:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
              <li>12 electrical test stations with advanced equipment including touchscreen oscilloscopes, precision multimeters, and triple power supplies</li>
              <li>8 3D printers for rapid prototyping, allowing students to quickly translate designs into physical objects</li>
              <li>8 circuit assembly workstations with temperature-controlled soldering equipment and comprehensive toolsets</li>
              <li>Computer workstations with professional engineering software</li>
              <li>Collaborative working spaces for team projects</li>
            </ul>
            <p className="text-gray-700">
              All facilities are regularly maintained and updated to ensure students have access to industry-standard equipment.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-sbu-red mb-6">Our Sponsors</h2>
            <p className="text-gray-700 mb-6">
              The NAI Engineering Teaching Lab is made possible through the generous support of North Atlantic Industries and other industry partners committed to advancing engineering education.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow">
                <img src="/lovable-uploads/349af6f0-57a1-4871-ab78-dc65f6e2c82a.png" alt="North Atlantic Industries" className="h-12" />
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow">
                <img src="/lovable-uploads/349af6f0-57a1-4871-ab78-dc65f6e2c82a.png" alt="Stony Brook University" className="h-12" />
              </div>
              {/* Add more sponsor logos as needed */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
