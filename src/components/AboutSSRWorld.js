import React from 'react';

function AboutSSRWorld() {
  return (
    <section id="about" className="py-16 bg-white" 
      style={{maxWidth: '100%', overflow: 'hidden', backgroundColor: '#f1eaea1d',tranprency:'0.9' }}
      >
      <div className="container mx-auto px-4">
       <u> <h1 className="text-5xl md:text-4xl font-bold mb-4">>>About RBMI WORLD</h1></u>
        <div  className="grid md:grid-cols-3 gap-8">
          <div    style={{maxWidth: '100%', overflow: 'hidden', backgroundColor: '#c2f48230',tranprency:'0.9' }} className="bg-blue-50 p-6 rounded-xl donation-card">
            <b>  <h2> <p   style={{maxWidth: '100%', overflow: 'hidden', backgroundColor: '#e6ec3e30',tranprency:'0.9' }} className="text-xl font-semibold mb-2"></p> Our Mission </h2> </b>
           <h4> <p  className="text-4xl md:text-3xl font-bold mb-4">RBMI WORLD is dedicated to providing education, healthcare, and support to underprivileged communities worldwide.</p> </h4>
          </div>
          <div  style={{maxWidth: '100%', overflow: 'hidden', backgroundColor: '#e6ec3e30',tranprency:'0.9' }}
           className="rounded-tl-sm bg-yellow-200 pl-12">
            <b> <h2> <p className="text-xl font-bold mb-2" > </p>Transparency  </h2></b>
            <h4> <p className="text-4xl md:text-4xl font-bold mb-4">We ensure that 90% of every donation goes directly to our programs, with only 10% for administrative costs.</p></h4>
          </div>
          <div style={{maxWidth: '100%', overflow: 'hidden', backgroundColor: '#e6ec3e30',tranprency:'0.9' }} className="bg-blue-50 p-6 rounded-xl donation-card">
            <h2><p  className="text-gray-600"> </p> Our Impact</h2>
            <h4> <p  className="text-4xl md:text-3xl font-bold mb-4">Last year, we supported over 20,000 people across 15 cities through our various programs.</p></h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSSRWorld;
