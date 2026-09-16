import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    const checkScrollPosition = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    
    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <button 
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 p-3 sm:p-4 rounded-full bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all duration-300 z-50 flex items-center justify-center ${
        showButton ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-90 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default BackToTop;