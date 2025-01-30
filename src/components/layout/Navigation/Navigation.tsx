import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose }) => {
  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/services', label: 'Услуги' },
    { path: '/about', label: 'О компании' },
    { path: '/contact', label: 'Контакты' }
  ];

  return (
    <nav className={`navigation ${isOpen ? 'open' : ''}`}>
      <ul>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={onClose}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation; 