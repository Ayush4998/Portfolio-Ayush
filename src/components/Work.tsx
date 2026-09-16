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
    description: 'AI-driven healthcare assistant that analyzes user symptoms via conversational chat to assess possible medical conditions and severity.',
    image: img,
    tags: ['Gemini API', 'Next.js', 'TypeScript'],
    liveUrl: 'https://healthcare-symptom-checker.vercel.app/',
    githubUrl: 'https://github.com/Ayush4998/healthcare-symptom-checker'
  },
  {
    id: 2,
    title: 'Customer Churn Prediction & Retention Dashboard',
    description: 'An end-to-end machine learning pipeline to predict customer churn, identify key drivers, and recommend retention strategies.',
    image: image,
    tags: ['Python', 'SHAP', 'XGBoost', 'Streamlit'],
    liveUrl: 'https://ayush4998-customer-churn-prediction-app-agw4ce.streamlit.app/',
    githubUrl: 'https://github.com/Ayush4998/customer-churn-prediction'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website designed to showcase projects and professional experience with modern animations and clean UI.',
    image: port,
    tags: ['React', 'TailwindCSS', 'GSAP'],
    liveUrl: 'https://portfolio-ayush-phi.vercel.app/',
    githubUrl: 'https://github.com/Ayush4998/Portfolio-Ayush'
  },
  {
    id: 4,
    title: 'Real-time Emotion Detection',
    description: 'Deployed an AI-powered emotion analysis web application that takes text input and visualizes the emotional composition.',
    image: emo,
    tags: ['Python', 'TypeScript', 'Vite'],
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
    title: 'Smart Glasses for the Visually Impaired',
    description: 'Developed smart glasses using ultrasonic sensors to detect obstacles and provide real-time tactile feedback for improved navigation.',
    image: gla,
    tags: ['Arduino NANO', 'Ultrasonic Sensor'],
    liveUrl: '',
    githubUrl: ''
  }
];

const Work: React.FC = () => (
  <section 
    id="work" 
    className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800"
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
      <div 
        className="text-center mb-12 sm:mb-16"
        data-aos="fade-up"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          My Work
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Here&apos;s a selection of some of my recent projects. Each one represents a unique challenge and solution.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projectsData.map((project, index) => (
          <div 
            key={project.id}
            className="card card-hover group"
            data-aos="fade-up"
            data-aos-delay={100 + (index * 50)}
            data-aos-duration="700"
          >
            <div className="relative overflow-hidden h-48 sm:h-52">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-5 w-full">
                  <div className="flex justify-end space-x-3">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-icon group-hover:scale-110 transition-transform"
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
                        className="btn-icon group-hover:scale-110 transition-transform"
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
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="tag"
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