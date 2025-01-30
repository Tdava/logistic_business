import React from 'react';
import './WorkProcess.scss';

const WorkProcess: React.FC = () => {
  const steps = [
    {
      icon: '📋',
      title: 'Заявка',
      description: 'Оставляете заявку или звоните нам'
    },
    {
      icon: '🤝',
      title: 'Обсуждение',
      description: 'Обсуждаем детали и условия сотрудничества'
    },
    {
      icon: '📦',
      title: 'Поиск товара',
      description: 'Находим поставщиков и проверяем их надежность'
    },
    {
      icon: '🚢',
      title: 'Доставка',
      description: 'Организуем доставку и таможенное оформление'
    },
    {
      icon: '✅',
      title: 'Получение',
      description: 'Получаете груз в указанном месте'
    }
  ];

  return (
    <section className="work-process">
      <div className="container">
        <h2>Как мы работаем</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess; 