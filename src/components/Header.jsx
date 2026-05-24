import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Interstellar CDC</h1>
        </div>
        
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <a href="#programs">Programs</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Header;