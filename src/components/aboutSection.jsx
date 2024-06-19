import React, { useState } from 'react';
import carolinaImage from '../imgs/carolina.jpg';
import gabrielImage from '../imgs/gabriel.jpg';
import inesImage from '../imgs/ines.jpg';
import laraImage from '../imgs/lara.jpg';
import leonardoImage from '../imgs/leonardo.jpg';
import nathaliaImage from '../imgs/nathalia.jpg';

const teamMembers = [
  { role: 'UX/UI Designer\nCommunication Designer', image: carolinaImage },
  { role: 'Project Manager\nFullStack Developer', image: gabrielImage },
  { role: 'Front-End Developer', image: inesImage },
  { role: 'UX/UI Designer\nCommunication Designer', image: laraImage },
  { role: 'Front-End Developer', image: leonardoImage },
  { role: 'Front-End Developer', image: nathaliaImage },
];

function AboutSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="bg-black text-white pb-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-32">
          <p className='relative text-[3rem] lg:text-[8rem] font-bold text-white pt-2'>about.
          </p>
        </h2>
        <p className="mb-4">
          <strong>et.cetera</strong> is a platform created as part of a CBL project, of the
          master's degree in Communication and Web Technologies at the University of Aveiro,
          in collaboration with Mindera.
        </p>
        <p className="mb-4">
          The challenge was to reinvent the e-commerce environment, integrating sustainable
          practices and exploring new technologies.
        </p>
        <p className="mb-8">
          With the aim of eliminating redundancies - the "et.ceteras" - of people's lives we created
          <strong> et.cetera</strong>, a household management platform.
        </p>
        <h3 className="text-3xl font-bold py-20 text-salmon">MEET THE TEAM</h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-left relative overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt="foto"
                  className="w-full h-auto rounded-2xl mb-4 hover:shadow-lg"
                />
                {hoveredIndex === index && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="absolute w-full h-full bg-salmon mask-border animate-mask"></div>
                  </div>
                )}
              </div>
              <p className="text-sm md:text-md lg:text-lg whitespace-pre-line">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
