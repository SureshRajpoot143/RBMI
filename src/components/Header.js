import React from 'react';

function Header() {
  return (
    <header className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8e75a2e4-f6b4-41bf-9457-16644eb2dd7e.png" alt="SSR WORLD logo" className="h-12 w-12 rounded-full" />
          <h1 className="text-2xl font-bold">SSR WORLD</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-blue-200 transition-colors">About</a></li>
            <li><a href="#donate" className="hover:text-blue-200 transition-colors">Donate</a></li>
            <li><a href="#impact" className="hover:text-blue-200 transition-colors">Our Impact</a></li>
            <li><a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
