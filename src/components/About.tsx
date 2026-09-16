import React from 'react';
import { Code, PenTool, Brain, Lightbulb } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
  const skills = [
    { 
      icon: <Code className="text-blue-500" size={24} />, 
      title: 'Development', 
      description: 'Expert in modern frontend frameworks with a focus on performance and accessibility.'
    },
    { 
      icon: <PenTool className="text-purple-500" size={24} />, 
      title: 'Design', 
      description: 'Keen eye for aesthetics and user experience, creating intuitive interfaces.'
    },
    { 
      icon: <Brain className="text-green-500" size={24} />, 
      title: 'Problem Solving', 
      description: 'Analytical approach to challenges with creative, efficient solutions.'
    },
    { 
      icon: <Lightbulb className="text-yellow-500" size={24} />, 
      title: 'Innovation', 
      description: 'Always exploring new technologies and approaches to stay ahead of the curve.'
    }
  ];

  return (
    <section 
      id="about" 
      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div 
            className="order-2 lg:order-1"
            data-aos="fade-right"
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

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="tag">Machine Learning</span>
              <span className="tag">Artificial Intelligence</span>
              <span className="tag">Data Science</span>
              <span className="tag">Full-Stack Development</span>
              <span className="tag">Java Developer</span>
            </div>
          </div>
          
          <div className="order-1 lg:order-2" data-aos="fade-left" data-aos-delay="200">
            <div className="card overflow-hidden">
              <Carousel
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={4000}
                className="rounded-none"
              >
                {certificates.map((cert, idx) => (
                  <div key={idx} className="p-6 sm:p-8 flex flex-col items-center">
                    <div className="relative mb-5 w-full max-w-xs">
                      <img 
                        src={cert.photo}
                        alt={cert.title}
                        className="w-full h-auto object-contain rounded-lg shadow-lg"
                      />
                      <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-2">
                      Certificate
                    </div>
                    <div className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white text-center mb-1">
                      {cert.title}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-center text-sm">
                      {cert.issuer}
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="card card-hover p-6 sm:p-7 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{skill.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;