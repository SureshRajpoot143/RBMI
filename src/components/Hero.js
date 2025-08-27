import React from 'react';


function Hero() {
  return (
    
   
    <section
    style={{maxWidth: '100%', overflow: 'hidden', backgroundColor: '#f137e86e',tranprency:'0.9' }}
   
    className=" text-white py-16"
>
      <div className="container mx-auto px-4 flex flex-col md:flex-row  items-center ">
        <div className="md:w-1/2 mb-8 md:mb-0  ">
         <u><i><h1 className="text-4xl md:text-5xl font-bold mb-4">Together We Can Change Lives</h1></i> </u> 
          <b>
         <h3 > <p className="text-xl mb-6 " color='red '>Every donation to RBMI WORLD helps create a better future for those in need. </p> </h3></b>
         
         <li>
      <button 
        onClick={() => window.location.href = '#donate'} 
        className="hover:text-blue-200 transition-colors"
      >
        make a Donate
      </button>
    </li>
          
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/35edaa0c-2c36-45ba-9469-730eeef6e3dc.png" 
            alt="Diverse group of smiling children" 
            className="hero-img rounded-lg shadow-xl"
            style={{ maxWidth: '1000px', width: '110%', height: 'auto', objectFit: 'cover', aspectRatio: '4/3' }}
         
         />
        </div>
      </div>
    </section>
  );
}

export default Hero;
