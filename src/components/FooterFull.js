import React from 'react';

function FooterFull() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">SSR WORLD</h3>
            <p>Creating positive change through education, healthcare, and community support worldwide.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-blue-300 transition-colors">About Us</a></li>
              <li><a href="#donate" className="hover:text-blue-300 transition-colors">Donate</a></li>
              <li><a href="#impact" className="hover:text-blue-300 transition-colors">Our Impact</a></li>
              <li><a href="#contact" className="hover:text-blue-300 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>123 Charity Street</li>
              <li>New York, NY 10001</li>
              <li>contact@ssrworld.org</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors">Facebook Icon</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Twitter Icon</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Instagram Icon</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>©️ 2023 SSR WORLD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterFull;
