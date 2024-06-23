import React, { useState, useEffect } from 'react';
import AboutSection from './components/aboutSection';
import Features from './components/features';
import Header from './components/header';
import EndingPage from './components/end';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';  // Importa o componente
import './index.css';

function App() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const endingPage = document.getElementById('endingPage');
      const rect = endingPage.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setToggle(true);
      } else {
        setToggle(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Header />
      <EndingPage toggle={toggle} />
      <Features />
      <AboutSection />
      <Footer />
      <ScrollToTop /> 
    </div>
  );
}

export default App;
