import React from 'react';
import {
  FaChessKnight,
  FaMusic,
  FaUtensils,
  FaFilm,
  FaPencilAlt,
  FaTableTennis,
  FaDumbbell,
  FaUmbrellaBeach
} from 'react-icons/fa';
import drawing from '../drawing.jpg'; 

interface Interest {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
}

const interestsData: Interest[] = [
  {
    id: 1,
    title: 'Chess',
    description: 'Strategic thinking and competitive gameplay.',
    icon: <FaChessKnight size={28} />,
    bgColor: 'bg-gray-100 dark:bg-gray-900/30',
    textColor: 'text-gray-600 dark:text-gray-400'
  },
  {
    id: 2,
    title: 'Music',
    description: 'Playing instruments and discovering new sounds.',
    icon: <FaMusic size={28} />,
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    textColor: 'text-purple-600 dark:text-purple-400'
  },
  {
    id: 3,
    title: 'Food',
    description: 'Exploring diverse cuisines and trying new recipes.',
    icon: <FaUtensils size={28} />,
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
    textColor: 'text-yellow-700 dark:text-yellow-500'
  },
  {
    id: 4,
    title: 'Movies',
    description: 'Appreciating storytelling through cinema.',
    icon: <FaFilm size={28} />,
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    textColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    id: 5,
    title: 'Sketching',
    description: 'Creating art through lines, shading, and ideas.',
    icon: <FaPencilAlt size={28} />,
    bgColor: 'bg-pink-100 dark:bg-pink-900/30',
    textColor: 'text-pink-600 dark:text-pink-400'
  },
  {
    id: 6,
    title: 'Table Tennis',
    description: 'Fast-paced rallies and precision shots.',
    icon: <FaTableTennis size={28} />,
    bgColor: 'bg-red-100 dark:bg-red-900/30',
    textColor: 'text-red-600 dark:text-red-400'
  },
  {
    id: 7,
    title: 'Gym',
    description: 'Building strength, endurance, and discipline.',
    icon: <FaDumbbell size={28} />,
    bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
    textColor: 'text-indigo-600 dark:text-indigo-400'
  },
  {
    id: 8,
    title: 'Beaches',
    description: 'Relaxing by the sea and enjoying sunsets.',
    icon: <FaUmbrellaBeach size={28} />,
    bgColor: 'bg-teal-100 dark:bg-teal-900/30',
    textColor: 'text-teal-600 dark:text-teal-400'
  }
];


const BeyondTech: React.FC = () => {
  return (
    <section 
      id="beyond" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Beyond Tech
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Coding is a part of my life—but not the whole story. Here are a few things I'm passionate about when I'm not busy debugging or staring at a screen.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {interestsData.map((interest, index) => (
            <div 
              key={interest.id}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
              data-aos="zoom-in"
              data-aos-delay={100 + (index * 50)}
            >
              <div className={`w-16 h-16 rounded-full ${interest.bgColor} ${interest.textColor} flex items-center justify-center mb-4`}>
                {interest.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {interest.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
        
        <div 
          className="mt-16 bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={drawing}
                alt="My Interests" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Finding Balance
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                To me, balance isn’t about switching off—it’s about engaging different dimensions of the mind. While technology challenges my logic and problem-solving, my interests beyond the screen cultivate intuition, observation, and presence.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Whether it's the strategic calm of chess, the discipline of gym sessions, the rhythm of music, or the precision of table tennis—each pursuit exercises a different strength. I enjoy creating memories around the food I share, immersing myself in thought-provoking, psychological films, and finding stillness by the sea.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Alongside this is a collage of sketches—another form of expression that keeps me connected to detail, curiosity, and the world beyond code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondTech;