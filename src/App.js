import React, { useState, useEffect } from 'react';
import AboutSection from './components/aboutSection';
import Features from './components/features';
import Header from './components/header';
import EndingPage from './components/end';
import Footer from './components/footer';
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
    <div className="App">
      <Header />
      
      <div id="endingPage">
        <EndingPage toggle={toggle} />
      </div>

      <section id="features">
        <Features/>
      </section>

      <section id="about">
        <AboutSection/>
      </section>

      <section id="contact">
        <Footer/>
      </section>
    </div>
  );
}

export default App;
