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
    <div>
      <header className="relative bg-black text-white pt-8" id="top">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <img src={logo} alt="et.cetera" className="h-6 w-auto" />

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <nav className={`space-x-8 text-md md:flex md:items-center ${menuOpen ? 'block' : 'hidden'}`}>
            <a href="#features" onClick={handleClick} className="nav-link">Features</a>
            <a href="#about" onClick={handleClick} className="nav-link">About</a>
            <a href="#contact" onClick={handleClick} className="nav-link">Contact</a>
          </nav>
        </div>
        <div className="text-center mt-32 relative">
          <h1 className="text-4xl mb-4">The household management app</h1>
          <p className="text-lg mb-8">that revolutionizes shared-home living</p>
          <div className="relative flex justify-center">
            <img src={phoneImage} alt="Phone" className="w-[800px] h-auto z-10" />
            <img src={backgroundImage} alt="Background" className="absolute inset-0 w-full h-full z-0 object-cover py-32 mt-44" />
          </div>
        </div>
        <div className="text-right bg-white py-32">
          <p className="text-black font-medium w-1/2"><strong>The solution for all your household-related problems</strong></p>
          <p className="text-black font-normal mt-2 w-1/2">No more forgetting to buy products, bringing the wrong items home, or having a housemate owe you money.</p>
        </div>
      </header>
    </div>
  );
}

export default Header;
