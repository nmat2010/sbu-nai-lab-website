
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-sbu-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/349af6f0-57a1-4871-ab78-dc65f6e2c82a.png" 
                  alt="Stony Brook University Logo" 
                  className="h-9 w-auto"
                />
              </div>
              <span className="ml-3 text-white font-medium">Electrical and Computer Engineering</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              <Link to="/schedule">
                <Button className="bg-white text-sbu-red hover:bg-gray-100">SCHEDULE</Button>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
