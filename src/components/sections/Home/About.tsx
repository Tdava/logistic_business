import React from 'react';
import AnimatedNumber from '../../common/AnimatedNumber';
import { FaShip, FaGlobe, FaSmile, FaClock } from 'react-icons/fa';
import './About.scss';

const About: React.FC = () => {
  const stats = [
    {
      number: 1500,
      label: 'Успешных доставок',
      suffix: '+',
      icon: <FaShip />
    },
    {
      number: 50,
      label: 'Стран присутствия',
      suffix: '+',
      icon: <FaGlobe />
    },
    {
      number: 95,
      label: 'Довольных клиентов',
      suffix: '%',
      icon: <FaSmile />
    },
    {
      number: 10,
      label: 'Лет опыта',
      suffix: '+',
      icon: <FaClock />
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <h2>О компании</h2>
        <p>
          Мы специализируемся на организации международных грузоперевозок 
          и предоставляем полный комплекс логистических услуг. Наша команда 
          профессионалов обеспечивает надежную и эффективную доставку грузов 
          по всему миру.
        </p>
        
        <div className="stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="number">
                <AnimatedNumber
                  value={stat.number}
                  suffix={stat.suffix}
                />
              </div>
              <div className="label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="cta-button">
          <a href="#contact" className="btn">
            Связаться с нами
          </a>
        </div>
      </div>
    </section>
  );
};

export default About; 