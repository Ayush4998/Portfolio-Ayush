import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/10 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative py-12 sm:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              Portfolio
            </a>
            <p className="mt-3 text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
              Creating beautiful, functional experiences.
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6" aria-label="Footer navigation">
            <a 
              href="#about" 
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              About
            </a>
            <a 
              href="#work" 
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              Work
            </a>
            <a 
              href="#journey" 
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              Journey
            </a>
            <a 
              href="#contact" 
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              Contact
            </a>
          </nav>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} Ayush Goswami. All rights reserved.
          </p>
          
          <div className="flex items-center justify-center md:justify-end gap-2 text-gray-500 text-sm">
            <span>Built with</span>
            <Heart className="text-red-500" size={14} />
            <span>using React, Tailwind & GSAP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;