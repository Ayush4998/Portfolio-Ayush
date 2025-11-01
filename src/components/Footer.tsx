import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              Portfolio
            </a>
            <p className="mt-2 text-gray-400 text-sm">
              Creating beautiful, functional experiences.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <a 
              href="#about" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a 
              href="#work" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Work
            </a>
            <a 
              href="#journey" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Journey
            </a>
            <a 
              href="#contact" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Ayush Goswami. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;