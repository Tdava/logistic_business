import React from 'react';
import './Hero.scss';

const Hero: React.FC = () => {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
      // Добавляем подсветку секции
      calculatorSection.classList.add('highlight');
      // Убираем подсветку через 2 секунды
      setTimeout(() => {
        calculatorSection.classList.remove('highlight');
      }, 2000);
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Доставка грузов из Китая</h1>
          <p className="subtitle">
            Надежная логистика для вашего бизнеса с полным таможенным оформлением
          </p>
          <div className="hero-buttons">
            <button 
              className="btn primary"
              onClick={scrollToCalculator}
            >
              Рассчитать стоимость
            </button>
            <button className="btn secondary">
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 