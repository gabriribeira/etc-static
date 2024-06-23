import React, { useState } from 'react';
import logo from '../imgs/logo.png';
import phoneImage from '../imgs/placeholder.png';
import backgroundImage from '../imgs/Ellipse.png';
import '../index.css'; // Importe o arquivo CSS para estilos

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Feche o menu após clicar em um link
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alternar estado do menu
  };

  return (
    <header className="relative bg-black text-white pt-8 fixed w-full" id="top">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <img src={logo} alt="et.cetera" className="h-6 w-auto" />

        <div className="relative">
          <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <button className="close-button" onClick={toggleMenu}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col items-start gap-y-4">
              <a href="#features" onClick={handleClick} className="nav-link hover:text-gray-400 hover:underline">Features</a>
              <a href="#about" onClick={handleClick} className="nav-link hover:text-gray-400 hover:underline">About</a>
              <a href="#contact" onClick={handleClick} className="nav-link hover:text-gray-400 hover:underline">Contact</a>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex md:items-center md:space-x-8">
          <a href="#features" onClick={handleClick} className="nav-link hover:text-gray-400 hover:underline">Features</a>
          <a href="#about" onClick={handleClick} className="nav-link hover:text-gray-400 hover:underline">About</a>
          <a href="#contact" onClick={handleClick} className="nav-link hover:text-gray-400 hover:underline">Contact</a>
        </nav>
      </div>
      <div className="text-center mt-16 md:mt-32 relative">
        <h1 className="text-4xl mb-4 px-4 font-semibold">The household management app</h1>
        <p className="text-md md:text-lg mb-8 px-4">that revolutionizes shared-home living</p>
        <div className="relative flex justify-center">
          <img src={phoneImage} alt="Phone" className="h-auto z-10 lg:w-[800px] lg:h-auto" />
          <img src={backgroundImage} alt="Background" className="absolute inset-0 w-full h-full z-0 object-contain mt-[200px] md:mt-[200px] lg:mt-[300px] lg:ml-4" />
        </div>
      </div>
      <div className="bg-white py-20 md:py-44">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2"></div>
          <div className="w-full md:w-1/2 text-center md:text-right">
            <p className="text-black lg:text-xl font-semibold text-center md:text-right">The solution for all your household-related problems</p>
            <p className="text-black lg:text-xl font-normal mt-2 text-center md:text-right">No more forgetting to buy products, bringing the wrong items home, or having a housemate owe you money.</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
