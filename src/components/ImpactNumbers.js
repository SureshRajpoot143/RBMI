import React from 'react';

function ImpactNumbers() {
  return (
    <section id="impact" className="py-16 bg-blue-600 text-white"  style={{maxWidth: '100%', overflow: 'hidden', backgroundColor: '#f1eaea1d',tranprency:'0.9' }}>
      <div className="container mx-auto px-4">
        <u><h2 className="text-5xl md:text-3xl font-bold mb-4"> >>Our Impact in Numbers</h2> </u>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">15</div>
           <h1> <p className="text-blue-100">cities Reached</p></h1>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">20K+</div>
           <h1> <p className="text-blue-100">Lives Touched</p></h1>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">$1M</div>
           <h1> <p className="text-blue-100">Raised This Year</p></h1> 
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">90%</div>
            <h1><p className="text-blue-100">Goes Directly to Causes</p></h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactNumbers;
