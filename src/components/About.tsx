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

const certificates = [
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford University",
    photo: mac
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
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div 
        className="container mx-auto px-4 max-w-5xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div 
            className="order-2 md:order-1"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I’m an aspiring machine learning engineer with a strong grounding in computer science, desiring to create constructive technology that makes a difference. My journey started with a slight attraction to how intelligent systems work. Now it has grown into a profound commitment towards solving real-world problems by using code.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I like formulating abstract concepts into tangible solutions—whether deploying AI models for healthcare, putting smart systems together with a microcontroller platform, or creating scalable applications from the ground up. I treat each project with curiosity and care, looking to bring the end-user an effortless experience.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I value creativity, a healthy balance, and continuous learning beyond the screen. I really think that engineering is equally about good design and empathy with clean code. Every project I undertake looks to not just build but also uplift, simplify, and add value.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium">Machine Learning</span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium">Artificial Intelligence</span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium">Data Science</span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium">Full-Stack Development</span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium">Java Develpoer</span>
            </div>
          </div>
          {/* Carousel of Certificates */}
          <div className="order-1 md:order-2 flex justify-center" data-aos="fade-left" data-aos-delay="200">
            <div className="w-full max-w-md">
              <Carousel
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={4000}
                className="rounded-lg shadow-lg bg-white dark:bg-gray-800"
              >
                {certificates.map((cert, idx) => (
                  <div key={idx} className="p-8 flex flex-col items-center">
                    <img 
                      src={cert.photo}
                      alt={cert.title}
                      className="mb-4 h-48 w-auto object-contain rounded shadow"
                    />
                    <div className="text-indigo-600 dark:text-indigo-400 font-bold text-lg mb-2">
                      Certificate
                    </div>
                    <div className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-1">
                      {cert.title}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-center">
                      {cert.issuer}
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

        </div>
        
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-8px]"
            >
              <div className="mb-4">{skill.icon}</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{skill.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

