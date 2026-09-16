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
    description: 'Strategic thinking with an elo of around 1500 :)',
    icon: <FaChessKnight size={28} />,
    bgColor: 'bg-gray-100 dark:bg-gray-900/30',
    textColor: 'text-gray-600 dark:text-gray-400'
  },
  {
    id: 2,
    title: 'Music',
    description: 'Singing and exploring different genres',
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
  },
  {
    id: 5,
    title: 'Fitness',
    description: 'Gym sessions for discipline and strength.',
    icon: <FaDumbbell size={28} />,
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    textColor: 'text-orange-600 dark:text-orange-400'
  },
  {
    id: 6,
    title: 'Movies',
    description: 'Psychological thrillers and thought-provoking cinema.',
    icon: <FaFilm size={28} />,
    bgColor: 'bg-pink-100 dark:bg-pink-900/30',
    textColor: 'text-pink-600 dark:text-pink-400'
  },
  {
    id: 7,
    title: 'Sketching',
    description: 'Creative expression through pencil and paper.',
    icon: <FaPencilAlt size={28} />,
    bgColor: 'bg-teal-100 dark:bg-teal-900/30',
    textColor: 'text-teal-600 dark:text-teal-400'
  },
  {
    id: 8,
    title: 'Beach',
    description: 'Finding stillness by the sea.',
    icon: <FaUmbrellaBeach size={28} />,
    bgColor: 'bg-cyan-100 dark:bg-cyan-900/30',
    textColor: 'text-cyan-600 dark:text-cyan-400'
  }
];

const BeyondTech: React.FC = () => {
  return (
    <section 
      id="beyond" 
      className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div 
          className="text-center mb-12 sm:mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Beyond Tech
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Coding is a part of my life — but not the whole story. Here are a few things I&apos;m passionate about when I&apos;m not busy debugging or staring at a screen.
          </p>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {interestsData.map((interest, index) => (
            <div 
              key={interest.id}
              className={`card card-hover p-6 group ${interest.bgColor} ${interest.textColor}`}
              data-aos="fade-up"
              data-aos-delay={100 + (index * 50)}
              data-aos-duration="600"
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${interest.bgColor} ${interest.textColor}`}>
                  {interest.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {interest.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className="card overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="md:flex">
            <div className="md:w-1/2 relative min-h-[300px]">
              <img 
                src={drawing}
                alt="My sketch collection" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-transparent"></div>
            </div>
            <div className="md:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                Personal
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Finding Balance
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  To me, balance isn&apos;t about switching off — it&apos;s about engaging different dimensions of the mind. While technology challenges my logic and problem-solving, my interests beyond the screen cultivate intuition, observation, and presence.
                </p>
                <p>
                  Whether it&apos;s the strategic calm of chess, the discipline of gym sessions, the rhythm of music, or the precision of table tennis — each pursuit exercises a different strength. I enjoy creating memories around the food I share, immersing myself in thought-provoking, psychological films, and finding stillness by the sea.
                </p>
                <p>
                  Alongside this is a collage of sketches — another form of expression that keeps me connected to detail, curiosity, and the world beyond code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondTech;