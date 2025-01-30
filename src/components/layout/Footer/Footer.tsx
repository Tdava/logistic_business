import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>О компании</h4>
            <p>Комплексные логистические решения для вашего бизнеса с Китаем. Доставка грузов, таможенное оформление, поиск поставщиков.</p>
          </div>

          <div className="footer-section">
            <h4>Контакты</h4>
            <ul>
              <li>
                <a href="tel:+74951234567">+7 (495) 123-45-67</a>
              </li>
              <li>
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
              <li>Ленинградский проспект 35, строение 2</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Навигация</h4>
            <ul>
              <li><Link to="/services">Услуги</Link></li>
              <li><Link to="/about">О компании</Link></li>
              <li><Link to="/contact">Контакты</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 