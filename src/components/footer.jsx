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
    <section id="contact" className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          
          <div className="md:w-1/3 text-center md:text-left mb-8 md:mb-0">
            <p className="mb-6 font-bold">drop a follow!</p>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/app.etc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition duration-300 ease-in-out hover:text-salmon hover:underline"
              >
                <img src={Instagram} alt="Instagram" className="w-8 h-8 mr-2" />
                <span className="font-medium">@app.etc</span>
              </a>
              <a
                href="https://www.facebook.com/app.et.cetera"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition duration-300 ease-in-out hover:text-salmon hover:underline"
              >
                <img src={Facebook} alt="Facebook" className="w-8 h-8 mr-2" />
                <span className="font-medium">/app.et.cetera</span>
              </a>
              <a
                href="https://www.linkedin.com/company/et-cetera-app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition duration-300 ease-in-out hover:text-salmon hover:underline"
              >
                <img src={LinkedIn} alt="LinkedIn" className="w-8 h-8 mr-2" />
                <span className="font-medium">company/et-cetera-app/</span>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/3 text-center mb-8 md:mb-0">
            <img src={Deca} alt="Deca" className="mx-auto" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          
          <div className="md:w-1/3 text-center md:text-right">
            <p className="mb-6 font-bold">email us!</p>
            <p
              className="font-medium cursor-pointer transition duration-300 ease-in-out hover:text-salmon hover:underline"
              onClick={handleEmailClick}
            >
              geral@etc-app.com
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Footer;
