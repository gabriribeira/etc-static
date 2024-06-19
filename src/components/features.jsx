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
    <div id="features" className="bg-salmon text-black pb-32">
      <div className="container mx-auto px-4">
        <div className="relative">
          <h2 className="text-4xl font-bold">
            <p className="absolute text-[3rem] lg:text-[8rem] font-bold text-black pt-2">
              features.
            </p>
          </h2>
        </div>
      </div>

      <div className="lg:w-[1024px] lg:h-[790px] md:w-[768px] md:w-[768px] lg:pt-12 md:pb-12">
        <div className="relative top-[141px] lg:left-[300px] md:left-0">
          <div className="absolute">
            <div className="flex flex-col w-[450px] items-start gap-[13px] absolute top-[397px] md:pb-32">
              <div className="lg:relative md:absolute mt-[-1px] font-semibold lg:text-[26px] md:text-[23px]">
                Collaborative Shopping Lists
              </div>
              <p className="lg:relative md:absolute text-black lg:text-[18px] md:text-[15px]">
                Add or edit products, making sure nothing stays in the supermarket and fight waste.
              </p>
            </div>
            <div className="absolute w-[550px] h-[547px] top-0 left-[209px] hidden md:block">
              <img className="absolute w-[500px] h-auto top-[25px] left-0 object-cover transition-all duration-300 transform hover:scale-105" alt="Element" src={collaborativeImage2} style={{ objectFit: 'contain' }} />
              <img className="absolute w-[320px] h-auto top-[260px] left-[200px] object-cover transition-all duration-300 transform hover:scale-105" alt="Element" src={collaborativeImage3} style={{ objectFit: 'contain' }} />
              <img className="absolute w-[300px] h-auto top-0 left-[400px] object-cover transition-all duration-300 transform hover:scale-105" alt="Iphone" src={collaborativeImage4} style={{ objectFit: 'contain' }} />
            </div>
          </div>
          <img className="absolute w-[356px] h-auto top-[148px] left-0 object-cover transition-all duration-300 transform hover:scale-105 hidden md:block" alt="Element" src={collaborativeImage1} />
        </div>
      </div>

      <div className="lg:w-[1024px] lg:h-[790px] md:w-[768px] md:w-[768px] lg:pt-12 md:pt-2">
        <div className="lg:relative top-[141px] lg:left-[300px] md:left-0 md:absolute">
          <div className="inline-flex flex-col items-end gap-[13px] absolute top-[217px] left-[360px]">
            <div className="lg:relative md:absolute w-fit mt-[-0.53px] font-semibold text-[26px] text-right md:items-start md:left-0">
              AI-powered shopping lists
            </div>
            <p className="lg:relative md:absolute w-[414.38px] font-normal text-[18px] text-right md:items-start md:left-0">
              Ask AI to automatically generate shopping lists for your favorite recipes or events. Get everything you need in a matter of seconds!
            </p>
          </div>
          <div className="absolute w-[502px] h-[445px] top-0 left-0 hidden md:block">
            <img className="absolute w-[345px] h-16 top-[65px] left-[250px] object-cover transition-all duration-300 transform hover:scale-105" alt="Button" src={aiImage1} />
            <img className="absolute w-[300px] h-auto top-0 left-0 object-cover transition-all duration-300 transform hover:scale-105" alt="Iphone" src={aiImage2} />
          </div>
        </div>
      </div>

      <div className="lg:w-[1024px] lg:h-[790px] md:w-[768px] md:w-[768px] lg:pt-12 md:pt-2">
        <div className="relative top-[141px] lg:left-[200px] md:left-0">
          <div className="inline-flex flex-col items-start gap-[13px] absolute top-[345px] left-[111px]">
            <div className="lg:relative md:absolute w-[294.63px] mt-[-0.53px] font-semibold text-[26px] md:items-start md:left-0">
              Manage Expenses
            </div>
            <p className="lg:relative md:absolute w-[415.98px] text-[18px] md:items-start md:left-0">
              Get an overview of all of your household-related expenses. Start dividing expenses effortlessly!
            </p>
          </div>
          <img className="absolute w-[320px] h-auto top-[87px] left-[200px] object-cover transition-all duration-300 transform hover:scale-105 hidden md:block" alt="Group" src={expensesImage1} />
          <img className="absolute w-[300px] h-auto top-[62px] left-[701px] object-cover transition-all duration-300 transform hover:scale-105 hidden md:block" alt="Iphone" src={expensesImage2} />
        </div>
      </div>

      <div className="lg:w-[1024px] lg:h-[790px] md:w-[768px] md:w-[768px] lg:pt-12 md:pt-2">
        <div className="lg:relative md:absolute w-[795px] h-[444px] top-[86px] lg:left-[300px] md:left-0">
          <div className="inline-flex flex-col items-end gap-[12.8px] absolute top-[312px] left-[341px]">
            <div className="lg:relative md:absolute w-fit mt-[-0.53px] font-semibold text-[26px] text-right md:items-start md:left-0">
              Sustainable Goals
            </div>
            <p className="lg:relative md:absolute w-[454.38px] font-normal text-[18px] text-right md:items-start md:left-0" >
              Initiate a sustainable goal and have every household member contribute to a greener environment.
            </p>
          </div>
          <div className="absolute w-[494px] h-[444px] top-0 left-0 hidden md:block">
            <img className="absolute w-[381px] h-auto top-[53px] left-[295px] object-cover transition-all duration-300 transform hover:scale-105" alt="Group" src={sustainableImage1} />
            <img className="absolute w-[300px] h-auto top-0 left-0 object-cover transition-all duration-300 transform hover:scale-105" alt="Iphone" src={sustainableImage2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
