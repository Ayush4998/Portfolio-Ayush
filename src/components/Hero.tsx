import React, { useState, useEffect } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import resume from '../Ayush_resume.pdf'; 
import profileImage from '../Profile.jpg';

const typewriterTexts = [
  'Full-Stack Developer',
  'AI/ML Engineer',
  'Data Engineer',
  'Problem Solver',
  'Creative Thinker'
];

const Hero: React.FC = () => {
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const text = typewriterTexts[typewriterIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(text.substring(0, displayText.length + 1));
        
        if (displayText.length === text.length) {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(text.substring(0, displayText.length - 1));
        
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTypewriterIndex((typewriterIndex + 1) % typewriterTexts.length);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, typewriterIndex]);
  
  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-1/4 bg-blue-200/30 dark:bg-blue-900/10 transform -skew-x-12 translate-x-[-20%]"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 bg-indigo-200/30 dark:bg-indigo-900/10 transform skew-x-12 translate-x-[20%]"></div>
      </div>
      
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-6 flex justify-center">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-gray-900 dark:text-white">
          Ayush Goswami
        </h1>
        
        
        <div className="h-8 sm:h-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-indigo-600 dark:text-indigo-400 font-medium">
            <span className="inline-block">{displayText}</span>
            <span className="inline-block animate-blink">|</span>
          </h2>
        </div>
        
        <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
          Building ML systems to solve real problems and skilled at using AI to supercharge my workflow.
        </p>
        

        <div className="mt-10 pl-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a 
            href="#about" 
            onClick={scrollToAbout}
            className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Learn More
          </a>
          <a
            href={resume}
            className="inline-flex items-center gap-2 justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Download/>
            Download Resume
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-2 left-0 right-0 flex justify-center animate-bounce">
        <a 
          href="#about" 
          onClick={scrollToAbout}
          className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md"
          aria-label="Scroll down"
        >
          <ChevronDown className="text-indigo-600 dark:text-indigo-400" size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;