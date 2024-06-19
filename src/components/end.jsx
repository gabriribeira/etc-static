import React from 'react';
import Logo from '../imgs/logo.png';
import '../index.css';

function EndingPage({ toggle }) {
  return (
    <div className="text-center pt-32 bg-white">
      <section className="flex justify-center py-10 md:py-20">
        <div className={`toggle ${toggle ? 'toggle-on' : 'toggle-off'}`}></div>
      </section>
      <h3 className="text-2xl md:text-4xl lg:text-[3rem] font-regular font-sans mb-2 px-6 pt-8 pb-16">
        activate your <strong>new household</strong> today!
      </h3>
      <img src={Logo} alt="logo" className="w-full pt-8 opacity-25" />
    </div>
  );
}

export default EndingPage;
