import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Journey from './components/Journey';
import BeyondTech from './components/BeyondTech';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Refresh ScrollTrigger on mount and resize
  useEffect(() => {
    ScrollTrigger.refresh();
    
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Add global animation styles
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      /* Modal animation */
      @keyframes modal-in {
        from {
          opacity: 0;
          transform: scale(0.95) translateY(20px);
        }
        to {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }
      
      .animate-modal-in {
        animation: modal-in 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
      }
      
      /* Slide down animation for mobile menu */
      @keyframes slide-down {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-slide-down {
        animation: slide-down 0.2s ease-out forwards;
      }
      
      /* Smooth scroll for anchor links */
      html {
        scroll-behavior: smooth;
      }
      
      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Work />
          <Journey />
          <BeyondTech />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;