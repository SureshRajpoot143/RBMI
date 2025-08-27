import React from 'react';



function Header() {
  return ( 
    <section  style={{maxWidth: '100%', overflow: 'hidden', backgroundColor: '#f137e86e',tranprency:'0.9' }}>
    <header className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        <div className="flex items-center space-x-2" >
            <img src="https://www.shutterstock.com/shutterstock/photos/1755099743/display_1500/stock-vector-save-lives-creative-logo-design-for-modern-designer-1755099743.jpg" alt="RBMI WORLD logo" className="header-logo" /> 
            
        
          <h1 className="text-5xl md:text-4xl font-bold mb-4">RBMI WORLD 
🌎</h1>
        </div>
<nav className="hidden md:block">
  <ul className="flex space-x-6">
    <li>
      <button 
        onClick={() => window.location.href = '#about'} 
        className="hover:text-blue-200 transition-colors"
      >
        About
      </button>
    </li>
    <li>
      <button 
        onClick={() => window.location.href = '#donate'} 
        className="hover:text-blue-200 transition-colors"
      >
        Donate
      </button>
    </li>
    <li>
      <button 
        onClick={() => window.location.href = '#impact'} 
        className="hover:text-blue-200 transition-colors"
      >
        Our Impact
      </button>
    </li>
    <li>
      <button 
        onClick={() => window.location.href = '#contact'} 
        className="hover:text-blue-200 transition-colors"
      >
        Contact
      </button>
    </li>
  </ul>
</nav>
</div>

    </header>
    </section>
  );
}

export default Header;
