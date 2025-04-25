import { useEffect } from 'react';

interface ScrollRevealOptions {
  delay?: number;
  distance?: string;
  duration?: number;
  easing?: string;
  interval?: number;
  opacity?: number;
  origin?: 'top' | 'right' | 'bottom' | 'left';
  rotate?: { x: number; y: number; z: number };
  scale?: number;
  cleanup?: boolean;
  container?: object;
  desktop?: boolean;
  mobile?: boolean;
  reset?: boolean;
  useDelay?: 'always' | 'once' | 'onload';
  viewFactor?: number;
  viewOffset?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
}

export const useScrollReveal = (
  targetSelector: string,
  options?: ScrollRevealOptions
) => {
  useEffect(() => {
    // Initialize on component mount
    const initScrollReveal = async () => {
      try {
        const elements = document.querySelectorAll(targetSelector);
        
        if (elements.length === 0) return;
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            // Add animations when element enters viewport
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              const delay = el.dataset.aosDelay ? parseInt(el.dataset.aosDelay) : 0;
              
              // Add animation class after specified delay
              setTimeout(() => {
                el.classList.add('aos-animate');
              }, delay);
              
              // If reset is not needed, unobserve the element
              if (!options?.reset) {
                observer.unobserve(el);
              }
            } else if (options?.reset) {
              // Remove animation class when element leaves viewport
              entry.target.classList.remove('aos-animate');
            }
          });
        }, {
          threshold: options?.viewFactor || 0.1,
        });
        
        elements.forEach((el) => {
          // Add initial class
          el.classList.add('aos-init');
          observer.observe(el);
        });
        
        // Cleanup function
        return () => {
          if (options?.cleanup) {
            elements.forEach((el) => {
              observer.unobserve(el);
              el.classList.remove('aos-init', 'aos-animate');
            });
          }
        };
      } catch (error) {
        console.error('Error initializing scroll reveal:', error);
      }
    };
    
    initScrollReveal();
  }, [targetSelector, options]);
};