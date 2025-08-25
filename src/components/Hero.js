import React from 'react';

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Together We Can Change Lives</h1>
<<<<<<< HEAD
          <p className="text-xl mb-6">Every donation to SSR WORLD helps create a better future for those in need.</p>
=======
          <p className="text-xl mb-6">Every donation to RBMI WORLD helps create a better future for those in need.</p>
>>>>>>> cc25e4e (fghjkl;)
          <a href="#donate" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors inline-block">Make a Donation</a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/35edaa0c-2c36-45ba-9469-730eeef6e3dc.png" 
            alt="Diverse group of smiling children" 
            className="hero-img rounded-lg shadow-xl"
            style={{ maxWidth: '380px', width: '100%', height: 'auto', objectFit: 'cover', aspectRatio: '4/3' }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
