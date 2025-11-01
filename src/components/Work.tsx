import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import image from '../churn.png';
import img from '../health.png';
import port from '../portfolio.png';
import emo from '../emotion.png';
import eth from '../ethical.jpg';
import gla from '../glasses.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Healthcare Symptom Assessment System',
    description: 'AI-driven healthcare assistant that analyzes user symptoms via conversational chat to assess possible medical condi-tions and severity.',
    image: img,
    tags: ['Gemini API', 'Next.js', 'Typescript'],
    liveUrl: 'https://healthcare-symptom-checker.vercel.app/',
    githubUrl: 'https://github.com/Ayush4998/healthcare-symptom-checker'
  },
  {
    id: 2,
    title: 'Customer Churn Prediction & Retention Dashboard',
    description: 'An end-to-end machine learning pipeline to predict customer churn, identify key drivers, and recommend retention strate-gies.',
    image: image,
    tags: ['Python', 'SHAP', 'XGBoost' ,'Streamlit'],
    liveUrl: 'https://ayush4998-customer-churn-prediction-app-agw4ce.streamlit.app/',
    githubUrl: 'https://github.com/Ayush4998/customer-churn-prediction'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website designed to showcase projects and professional experience with modern animations and clean UI.',
    image: port,
    tags: ['React', 'TailwindCSS', 'Framer Motion'],
    liveUrl: 'https://portfolio-ayush-phi.vercel.app/',
    githubUrl: 'https://github.com/Ayush4998/Portfolio-Ayush'
  },
  {
    id: 4,
    title: 'Real-time Emotion Detection',
    description: 'Deployed an AI-powered emotion analysis web application that takes text input and visualizes the emotional composition.',
    image: emo,
    tags: ['Python', 'Typescript', 'Vite'],
    liveUrl: 'https://emotion-detector-alpha.vercel.app/',
    githubUrl: 'https://github.com/Ayush4998/Emotion-detector'
  },
  {
    id: 5,
    title: 'Ethical Assistant System',
    description: 'Developed an AI-powered web app guiding users through ethical decisions using Utilitarianism, Deontology, and Rights-Based frameworks.',
    image: eth,
    tags: ['Flask', 'JavaScript', 'API'],
    liveUrl: 'https://cheery-elf-419b59.netlify.app/',
    githubUrl: 'https://github.com/Ayush4998/Ethical-decision-assistant'
  },
  {
    id: 6,
    title: 'Smart Glasses for the blind',
    description: 'Developed smart glasses for the visually impaired using ultrasonic sensors to detect obstacles and provide real-time tactile feedback for improved navigation and spatial awareness.',
    image: gla,
    tags: ['Arduino NANO', 'Ultrasonic Sensor'],
    liveUrl: '',
    githubUrl: ''
  }
];


const Work: React.FC = () => (
  <section 
    id="work" 
    className="py-20 bg-gray-50 dark:bg-gray-800"
  >
    <div className="container mx-auto px-4 max-w-5xl">
      <div 
        className="text-center mb-16"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          My Work
        </h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Here's a selection of some of my recent projects. Each one represents a unique challenge and solution.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div 
            key={project.id}
            className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay={100 + (index * 50)}
          >
            <div className="relative overflow-hidden h-48">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <div className="flex justify-end space-x-2">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                        aria-label="View live site"
                      >
                        <ExternalLink size={18} className="text-white" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                        aria-label="View code on GitHub"
                      >
                        <Github size={18} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
