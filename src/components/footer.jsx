import React from 'react';
import Instagram from '../imgs/insta.png';
import Facebook from '../imgs/facebook.png';
import LinkedIn from '../imgs/linkedin.png';
import Deca from '../imgs/deca.png';

function Footer() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:geral@etc-app.com';
  };

  return (
    <div className="bg-black pb-6 sm:py-12"> 
      <div className="max-w-screen-xl mx-auto px-4 py-8 md:flex md:items-center md:justify-between">
        
        <div className="md:w-1/3 text-white md:text-left text-center mb-12 md:mb-0">
          <p className="mb-2 mb-6 font-bold">drop a follow!</p>
          <div className="mb-4">
            <a
              href="https://www.instagram.com/app.etc"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link flex items-center mb-6 transition duration-300 ease-in-out hover:text-salmon hover:underline"
            >
              <img src={Instagram} alt="Instagram" className="w-8 h-8 mr-2" />
              <span className="text-white font-medium">@app.etc</span>
            </a>
            <a
              href="https://www.facebook.com/app.et.cetera"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link flex items-center mb-6 transition duration-300 ease-in-out hover:text-salmon hover:underline"
            >
              <img src={Facebook} alt="Facebook" className="w-8 h-8 mr-2" />
              <span className="text-white font-medium">/app.et.cetera</span>
            </a>
            <a
              href="https://www.linkedin.com/company/et-cetera-app/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link flex items-center transition duration-300 ease-in-out hover:text-salmon hover:underline"
            >
              <img src={LinkedIn} alt="LinkedIn" className="w-8 h-8 mr-2" />
              <span className="text-white font-medium">company/et-cetera-app/</span>
            </a>
          </div>
        </div>
        
        <div className="md:w-1/3 text-center mb-4">
          <div className="flex items-center justify-center">
            <img src={Deca} alt="Deca" className="mx-auto md:pb-12" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
        
        <div className="md:w-1/3 text-white text-center md:text-right">
          <div className="mb-4">
            <p className="mb-2 font-bold">email us!</p>
            <div className="relative inline-block">
              <p
                className="text-white font-medium cursor-pointer transition duration-300 ease-in-out hover:text-salmon hover:underline"
                onClick={handleEmailClick}
              >
                geral@etc-app.com
              </p>
              <span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-transform duration-300 ease-out transform scale-x-0 origin-bottom-right"
              ></span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
