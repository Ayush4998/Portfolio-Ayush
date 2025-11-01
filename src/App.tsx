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
import { useScrollReveal } from './utils/useScrollReveal';

function App() {
  // Initialize scroll reveal effect
  useScrollReveal('[data-aos]', {
    reset: false,
    cleanup: true
  });

  // Add custom styles for animations to the document
  useEffect(() => {
    // Add CSS for animations
    const style = document.createElement('style');
    style.innerHTML = `
      /* Base AOS animation classes */
      [data-aos] {
        opacity: 0;
        transition-property: opacity, transform;
        transition-duration: 800ms;
        transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.0);
      }
      
      [data-aos].aos-animate {
        opacity: 1;
        transform: translateX(0) translateY(0) scale(1);
      }
      
      /* Specific animations */
      [data-aos="fade-up"] {
        transform: translateY(30px);
      }
      
      [data-aos="fade-down"] {
        transform: translateY(-30px);
      }
      
      [data-aos="fade-right"] {
        transform: translateX(-30px);
      }
      
      [data-aos="fade-left"] {
        transform: translateX(30px);
      }
      
      [data-aos="zoom-in"] {
        transform: scale(0.9);
      }
      
      /* Typewriter cursor animation */
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      
      .animate-blink {
        animation: blink 1s step-end infinite;
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
        <Hero />
        <About />
        <Work />
        <Journey />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;