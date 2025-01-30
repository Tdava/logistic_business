import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.scss';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <img src="/assets/images/logo.svg" alt="Логотип" />
        </Link>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

        <div className="header-contacts">
          <a href="tel:+74951234567" className="phone">+7 (495) 123-45-67</a>
          <button className="btn secondary" onClick={() => document.getElementById('callback')?.scrollIntoView()}>
            Заказать звонок
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 