import React from 'react';
import './CallToAction.scss';

const CallToAction: React.FC = () => {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
      calculatorSection.classList.add('highlight');
      setTimeout(() => {
        calculatorSection.classList.remove('highlight');
      }, 2000);
    }
  };

  return (
    <section className="call-to-action">
      <div className="container">
        <div className="cta-content">
          <h2>Готовы начать работу с Китаем?</h2>
          <p>
            Оставьте заявку прямо сейчас и получите бесплатную консультацию 
            по вашему проекту
          </p>
          <div className="cta-buttons">
            <button 
              className="btn primary"
              onClick={scrollToCalculator}
            >
              Рассчитать стоимость
            </button>
            <button 
              className="btn secondary"
              onClick={() => document.getElementById('callback')?.scrollIntoView()}
            >
              Заказать звонок
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 