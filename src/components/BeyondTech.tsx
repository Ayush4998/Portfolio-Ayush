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
    description: 'With an elo of around 1500 :)',
    icon: <FaChessKnight size={28} />,
    bgColor: 'bg-gray-100 dark:bg-gray-900/30',
    textColor: 'text-gray-600 dark:text-gray-400'
  },
  {
    id: 2,
    title: 'Music',
    description: 'Singing ',
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
    title: 'Table Tennis',
    description: 'Fast-paced rallies and precision shots.',
    icon: <FaTableTennis size={28} />,
    bgColor: 'bg-red-100 dark:bg-red-900/30',
    textColor: 'text-red-600 dark:text-red-400'
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