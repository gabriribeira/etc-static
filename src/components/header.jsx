import React, { useState } from 'react';
import logo from '../imgs/logo.png';
import phoneImage from '../imgs/placeholder.png';
import backgroundImage from '../imgs/Ellipse.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    
      <header className="relative bg-black text-white pt-8 fixed" id="top">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <img src={logo} alt="et.cetera" className="h-6 w-auto" />

          <div className="relative">
            <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {menuOpen && (
              <div className="absolute left-[-200px] mt-2 bg-black text-white py-2">
                <div className="flex justify-around gap-x-4">
                  <a href="#features" onClick={handleClick} className="nav-link hover:text-gray-400 hover:underline">Features</a>
                  <a href="#about" onClick={handleClick} className="nav-link hover:text-gray-400 hover:underline">About</a>
                  <a href="#contact" onClick={handleClick} className="nav-link hover:text-gray-400 hover:underline">Contact</a>
                </div>
              </div>
            )}
          </div>

          <nav className="hidden md:flex md:items-center md:space-x-8">
            <a href="#features" onClick={handleClick} className="nav-link hover:text-gray-400 hover:underline">Features</a>
            <a href="#about" onClick={handleClick} className="nav-link hover:text-gray-400 hover:underline">About</a>
            <a href="#contact" onClick={handleClick} className="nav-link hover:text-gray-400 hover:underline">Contact</a>
          </nav>
        </div>
        <div className="text-center mt-16 md:mt-32 relative">
          <h1 className="text-3xl md:text-4xl mb-4">The household management app</h1>
          <p className="text-md md:text-lg mb-8">that revolutionizes shared-home living</p>
          <div className="relative flex justify-center">
            <img src={phoneImage} alt="Phone" className="w-full max-w-xs md:max-w-lg h-auto z-10" />
            <img src={backgroundImage} alt="Background" className="absolute inset-0 w-full h-full z-0 object-cover mt-20 md:mt-44" />
          </div>
        </div>
        <div className="bg-white py-20 md:py-44">
          <div className="container mx-auto px-4 text-center md:text-right">
            <p className="text-black font-medium"><strong>The solution for all your household-related problems</strong></p>
            <p className="text-black font-normal mt-2">No more forgetting to buy products, bringing the wrong items home, or having a housemate owe you money.</p>
          </div>
        </div>
      </header>
    
  );
}

export default Header;
