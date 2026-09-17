import React, { useState, useEffect, useRef } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import resume from '../AyushGoswamiResume.pdf'; 
import profileImage from '../Profile.jpg';

gsap.registerPlugin(ScrollTrigger);

const typewriterTexts = [
  'Data Scientist',
  'AI/ML Engineer',
  'Data Engineer',
  'Problem Solver',
  'Creative Thinker'
];

const Hero: React.FC = () => {
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef<HTMLSectionElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = typewriterTexts[typewriterIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(text.substring(0, displayText.length + 1));
        
        if (displayText.length === text.length) {
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.from(profileRef.current, { 
        y: 50, 
        opacity: 0, 
        duration: 1, 
        scale: 0.9 
      })
      .from(titleRef.current, { 
        y: 30, 
        opacity: 0, 
        duration: 0.8 
      }, '-=0.6')
      .from(subtitleRef.current, { 
        y: 30, 
        opacity: 0, 
        duration: 0.8 
      }, '-=0.5')
      .from(descriptionRef.current, { 
        y: 30, 
        opacity: 0, 
        duration: 0.8 
      }, '-=0.4')
      .from(buttonsRef.current, { 
        y: 30, 
        opacity: 0, 
        duration: 0.8,
        stagger: 0.1
      }, '-=0.3')
      .from(scrollIndicatorRef.current, { 
        y: 20, 
        opacity: 0, 
        duration: 0.8 
      }, '-=0.2');

      gsap.to('.hero-shape-1', {
        y: -100,
        rotation: 12,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });

      gsap.to('.hero-shape-2', {
        y: 100,
        rotation: -12,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });

      gsap.to(profileRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-shape-1 absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-blue-200/30 to-transparent dark:from-blue-900/10 transform -skew-x-12 translate-x-[-25%]"></div>
        <div className="hero-shape-2 absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-indigo-200/30 to-transparent dark:from-indigo-900/10 transform skew-x-12 translate-x-[25%]"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/20 dark:bg-indigo-900/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 dark:bg-blue-900/10 rounded-full blur-3xl animate-float animation-delay-300"></div>
      </div>
      
      <div className="container max-w-5xl mx-auto text-center relative z-10 py-12 sm:py-20">
        <div ref={profileRef} className="mb-8 sm:mb-10 flex justify-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/80 dark:border-gray-800/80 shadow-2xl shadow-indigo-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20"></div>
            <img 
              src={profileImage} 
              alt="Ayush Goswami - Profile" 
              className="w-full h-full object-cover relative z-10"
            />
          </div>
        </div>
        
        <h1 
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white tracking-tight"
        >
          Ayush Goswami
        </h1>
        
        <div ref={subtitleRef} className="h-10 sm:h-12 mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-indigo-600 dark:text-indigo-400 font-medium">
            <span className="inline-block">{displayText}</span>
            <span className="inline-block animate-blink ml-1">|</span>
          </h2>
        </div>
        
        <p 
          ref={descriptionRef}
          className="mt-4 sm:mt-6 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed px-2"
        >
          Building ML systems to solve real problems and skilled at using AI to supercharge my workflow.
        </p>
        
        <div 
          ref={buttonsRef}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center px-4"
        >
          <a 
            href="#about" 
            onClick={scrollToAbout}
            className="btn-primary group"
          >
            <span>Learn More</span>
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href={resume}
            className="btn-secondary group"
            download
          >
            <Download className="w-5 h-5 mr-2" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
      
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce"
      >
        <a 
          href="#about" 
          onClick={scrollToAbout}
          className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:scale-105 transition-all duration-300"
          aria-label="Scroll down to about section"
        >
          <ChevronDown className="text-indigo-600 dark:text-indigo-400" size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;