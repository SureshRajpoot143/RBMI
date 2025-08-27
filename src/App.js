import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import AboutSSRWorld from './components/AboutSSRWorld';
import DonationFormFull from './components/DonationFormFull';
import ImpactNumbers from './components/ImpactNumbers';
import Contact from './components/Contact';
import FooterFull from './components/FooterFull';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutSSRWorld />
      <DonationFormFull />
      <ImpactNumbers />
      <Contact />
      <FooterFull />
    </div>
  );
}

export default App;
