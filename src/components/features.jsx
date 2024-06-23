import React from 'react';
import collaborativeImage1 from '../imgs/collaborativeone.png';
import collaborativeImage2 from '../imgs/collaborativetwo.png';
import collaborativeImage3 from '../imgs/collaborativethree.png';
import collaborativeImage4 from '../imgs/collaborativescreen.png';
import aiImage1 from '../imgs/aione.png';
import aiImage2 from '../imgs/aishoppinglist.png';
import expensesImage1 from '../imgs/manageexpensesone.png';
import expensesImage2 from '../imgs/managescreen.png';
import sustainableImage1 from '../imgs/sustainabilityone.png';
import sustainableImage2 from '../imgs/sustainabilityscreen.png';

function Features() {
  return (
    <section id="features" className="bg-salmon text-black pb-32">
      <div className="container mx-auto px-4">
        <div className="relative">
          <h2 className="text-4xl font-bold">
            <span className="block text-[3rem] lg:text-[8rem] font-bold text-black pt-2">
              features.
            </span>
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:pt-12 md:pb-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8 mt-12 lg:mt-0">
          <div className="flex flex-col w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="mb-4">
              <h3 className="text-2xl lg:text-3xl font-semibold">Collaborative Shopping Lists</h3>
              <p className="text-lg lg:text-xl">
                Add or edit products, making sure nothing stays in the supermarket and fight waste.
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start space-x-4">
              <img src={collaborativeImage1} alt="Collaborative 1" className="w-full max-w-xs lg:max-w-sm mb-4 transition-transform duration-300 transform hover:scale-105" />
              <img src={collaborativeImage2} alt="Collaborative 2" className="w-full max-w-xs lg:max-w-sm mb-4 transition-transform duration-300 transform hover:scale-105" />
              <img src={collaborativeImage3} alt="Collaborative 3" className="w-full max-w-xs lg:max-w-sm mb-4 transition-transform duration-300 transform hover:scale-105" />
              <img src={collaborativeImage4} alt="Collaborative 4" className="w-full max-w-xs lg:max-w-sm mb-4 transition-transform duration-300 transform hover:scale-105" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:pt-12 md:pt-2">
        <div className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8 mt-12 lg:mt-0">
          <div className="flex flex-col w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="mb-4">
              <h3 className="text-2xl lg:text-3xl font-semibold text-right">AI-powered Shopping Lists</h3>
              <p className="text-lg lg:text-xl text-right">
                Ask AI to automatically generate shopping lists for your favorite recipes or events. Get everything you need in a matter of seconds!
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-4">
              <img src={aiImage1} alt="AI 1" className="w-full max-w-xs lg:max-w-sm mb-4 transition-transform duration-300 transform hover:scale-105" />
              <img src={aiImage2} alt="AI 2" className="w-full max-w-xs lg:max-w-sm mb-4 transition-transform duration-300 transform hover:scale-105" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:pt-12 md:pt-2">
        <div className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8 mt-12 lg:mt-0">
          <div className="flex flex-col w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="mb-4">
              <h3 className="text-2xl lg:text-3xl font-semibold">Manage Expenses</h3>
              <p className="text-lg lg:text-xl">
                Get an overview of all of your household-related expenses. Start dividing expenses effortlessly!
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start space-x-4">
              <img src={expensesImage1} alt="Expenses 1" className="w-full max-w-xs lg:max-w-sm mb-4 transition-transform duration-300 transform hover:scale-105" />
              <img src={expensesImage2} alt="Expenses 2" className="w-full max-w-xs lg:max-w-sm mb-4 transition-transform duration-300 transform hover:scale-105" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:pt-12 md:pt-2">
        <div className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8 mt-12 lg:mt-0">
          <div className="flex flex-col w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="mb-4">
              <h3 className="text-2xl lg:text-3xl font-semibold text-right">Sustainable Goals</h3>
              <p className="text-lg lg:text-xl text-right">
                Initiate a sustainable goal and have every household member contribute to a greener environment.
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-4">
              <img src={sustainableImage1} alt="Sustainable 1" className="w-full max-w-xs lg:max-w-sm mb-4 transition-transform duration-300 transform hover:scale-105" />
              <img src={sustainableImage2} alt="Sustainable 2" className="w-full max-w-xs lg:max-w-sm mb-4 transition-transform duration-300 transform hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
