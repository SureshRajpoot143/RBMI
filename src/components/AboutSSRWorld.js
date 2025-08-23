import React from 'react';

function AboutSSRWorld() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">About SSR WORLD</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl donation-card">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">SSR WORLD is dedicated to providing education, healthcare, and support to underprivileged communities worldwide.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl donation-card">
            <h3 className="text-xl font-semibold mb-2">Transparency</h3>
            <p className="text-gray-600">We ensure that 90% of every donation goes directly to our programs, with only 10% for administrative costs.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl donation-card">
            <h3 className="text-xl font-semibold mb-2">Our Impact</h3>
            <p className="text-gray-600">Last year, we supported over 50,000 people across 15 countries through our various programs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSSRWorld;
