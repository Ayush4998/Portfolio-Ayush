import React from 'react';
import { Calendar, Briefcase, GraduationCap, Award } from 'lucide-react';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  organization: string;
  description: string;
  icon: React.ReactNode;
  category: 'work' | 'education' | 'achievement';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: '2022 - 2026',
    title: 'Bachelor\'s Degree, Computer Science',
    organization: 'Vellore Institute Of Technology',
    description: 'Built a strong foundation in computer science while actively applying concepts through hands-on projects and practical work.',
    icon: <GraduationCap size={20} />,
    category: 'education'
  },
  {
    id: 2,
    year: '2025 June',
    title: 'Data Analysis Intern',
    organization: 'SiyaCloud Private Limited',
    description: 'I was actively involved in analysing sales data, generating actionable insights, and supporting the business intelligence needs of the company. ',
    icon: <Briefcase size={20} />,
    category: 'work'
  },
  {
    id: 3,
    year: '2025 March',
    title: 'Semi Finalist',
    organization: 'Build With India - Hackathon',
    description: 'Recognized for placing among the top 80 teams out of 25000 team all over India with our innovative idea and realistic deployement plans.',
    icon: <Award size={20} />,
    category: 'achievement'
  },
  {
    id: 4,
    year: '2025 Feburary - April',
    title: 'Frontend Developer',
    organization: 'Pooja Fasteners',
    description: 'Built the landing page for Pooja Fasteners, enhancing the company’s online presence. Collaborated with stakeholders to gather requirements and refine website functionalities',
    icon: <Briefcase size={20} />,
    category: 'work'
  }
];

const Journey: React.FC = () => {
  return (
    <section 
      id="journey" 
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Journey
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            The path that has shaped my skills and expertise. A timeline of professional growth and learning.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline Connector Line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-indigo-200 dark:bg-indigo-900 transform md:translate-x-[-0.5px]"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-delay={100 + (index * 50)}
                data-aos-duration="800"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full bg-indigo-600 transform md:translate-x-[-50%] shadow-md flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                
                {/* Timeline Content */}
                <div className={`md:w-1/2 pl-10 md:pl-0 ${
                  index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                }`}>
                  <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                        item.category === 'work' 
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                          : item.category === 'education'
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                            : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                      }`}>
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 py-1 px-3 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                      {item.organization}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
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

export default Journey;