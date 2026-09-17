import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sup from '../supervised.jpg';
import ALA from '../adv_algo.jpg';
import sw from '../sw_job.jpg';
import ai from '../ai_job.jpg';
import gen from '../genai.jpg';
import web from '../web.jpg';
import dbms from '../dbms.jpg';
import mac from '../Machine.jpg';
import uns from '../uns.jpg';
import genai from '../genai.png';

gsap.registerPlugin(ScrollTrigger);

const certificates = [
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford University",
    photo: mac
  },
  {
    title: "Generative AI Professional (1Z0-1127-25)",
    issuer: "Oracle Cloud Infrastructure ",
    photo: genai
  },
  {
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "DeepLearning.AI & Stanford University",
    photo: uns
  },
  {
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI & Stanford University",
    photo: ALA
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI & Stanford University",
    photo: sup
  },
  {
    title: "Advanced Software Engineering Job Simulation",
    issuer: "Walmart GlobalTech",
    photo: sw
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft",
    photo: gen
  },
  {
    title: "Artificial Intelligence Job Simulation",
    issuer: "Cognizant",
    photo: ai
  },
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    photo: web
  },
  {
    title: "Database Management System",
    issuer: "Scalar",
    photo: dbms
  }
];

const About: React.FC = () => {
  // Credential wall: pin the gallery and scrub the row horizontally as the
  // page scrolls, so browsing certificates is tied to the same scroll the
  // visitor is already doing rather than a separate autoplay/arrow control.
  const galleryRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const certificateRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Only pin/scrub on larger screens where there's room for it, and only
      // when the visitor hasn't asked for reduced motion. Below that, and
      // for reduced-motion users, it's a plain swipeable row — no GSAP.
      mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        const track = trackRef.current;
        const wrap = galleryRef.current;
        if (!track || !wrap) return;

        const getDistance = () => Math.max(0, track.scrollWidth - wrap.clientWidth);

        // Focus follows the card nearest the middle of the viewport. Running
        // this as the scrubbed tween renders keeps it accurate in both scroll
        // directions without keeping any extra direction state.
        const updateCertificateFocus = () => {
          const viewportCenter = window.innerWidth / 2;
          let focusedIndex = 0;
          let closestDistance = Number.POSITIVE_INFINITY;

          certificateRefs.current.forEach((card, index) => {
            if (!card) return;
            const bounds = card.getBoundingClientRect();
            const distance = Math.abs(bounds.left + bounds.width / 2 - viewportCenter);
            if (distance < closestDistance) {
              closestDistance = distance;
              focusedIndex = index;
            }
          });

          certificateRefs.current.forEach((card, index) => {
            if (!card) return;
            const isFocused = index === focusedIndex;
            gsap.set(card, {
              scale: isFocused ? 1.08 : 0.96,
              filter: isFocused ? 'blur(0px)' : 'blur(3px)',
              opacity: isFocused ? 1 : 0.58,
              zIndex: isFocused ? 2 : 1,
            });
          });
        };

        updateCertificateFocus();

        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          onUpdate: updateCertificateFocus,
          scrollTrigger: {
            trigger: wrap,
            start: 'top top',
            end: () => `+=${getDistance()}`,
            scrub: 0.5,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressRef.current) {
                progressRef.current.style.width = `${self.progress * 100}%`;
              }
            },
            onRefresh: updateCertificateFocus,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      return () => mm.revert();
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      className="bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl min-h-screen flex flex-col justify-center py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div 
            className="text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-5">
              Who I Am
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I&apos;m a final-year Computer Science student at VIT Chennai who loves turning ideas into things that actually work. What started as a simple curiosity about how systems make decisions turned into a genuine drive to build technology that&apos;s useful, thoughtful, and a little smarter every time.
              </p>
              <p>
                I enjoy working across the stack: designing data pipelines, training ML models, or putting everything together into clean, functional apps. I care as much about how something feels to use as how well it performs. Whether it&apos;s building a healthcare chatbot, automating a process, or creating a small tool that makes someone&apos;s work easier, I try to keep one goal: make it simple, make it matter.
              </p>
              <p>
                Outside of code, I value clarity, creativity, and learning from how things actually work in the real world. For me, engineering isn&apos;t just about building instead it&apos;s about understanding, improving, and adding something meaningful to the system around you.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="tag">Machine Learning</span>
              <span className="tag">Artificial Intelligence</span>
              <span className="tag">Data Science</span>
              <span className="tag">Full-Stack Development</span>
              <span className="tag">Java Developer</span>
            </div>
          </div>
        </div>
      </div>

      {/* This full-width stage pins only after the About copy has scrolled by. */}
      <div
        ref={galleryRef}
        className="relative h-screen min-h-[560px] flex flex-col justify-center overflow-hidden"
      >
        <div className="px-4 sm:px-6 lg:px-8 mb-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
            Certifications
          </p>
          <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Learning in motion
          </h3>
        </div>

        <div className="mx-auto mb-5 h-px w-[min(90vw,64rem)] bg-gray-200 dark:bg-gray-800 relative overflow-hidden hidden lg:block">
          <div
            ref={progressRef}
            className="absolute inset-y-0 left-0 bg-indigo-500 dark:bg-indigo-400"
            style={{ width: '0%' }}
          />
        </div>

        <div className="w-full overflow-x-auto lg:overflow-visible py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div
            ref={trackRef}
            className="flex w-max gap-6 lg:gap-10 px-[calc(50vw-150px)] sm:px-[calc(50vw-190px)] lg:px-[calc(50vw-230px)] snap-x snap-mandatory lg:snap-none"
          >
            {certificates.map((cert, idx) => (
              <div
                key={cert.title}
                ref={(element) => { certificateRefs.current[idx] = element; }}
                className="shrink-0 w-[300px] sm:w-[380px] lg:w-[460px] snap-center origin-center will-change-transform transition-[filter,opacity] duration-300 lg:transition-none"
              >
                <div style={{ transform: `rotate(${idx % 2 === 0 ? '-0.6deg' : '0.6deg'})` }}>
                  <div className="p-3 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-sm shadow-sm">
                    <div className="aspect-[4/3] bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                      <img
                        src={cert.photo}
                        alt={cert.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="mt-3 text-center px-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white leading-snug">
                      {cert.title}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-500">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
