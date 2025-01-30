import React from 'react';
import './Features.scss';

const Features: React.FC = () => {
  const features = [
    {
      icon: '🚢',
      title: 'Все виды перевозок',
      description: 'Морские, железнодорожные, авиа и мультимодальные перевозки'
    },
    {
      icon: '📦',
      title: 'Консолидация грузов',
      description: 'Объединяем небольшие партии товаров для оптимизации расходов'
    },
    {
      icon: '📋',
      title: 'Таможенное оформление',
      description: 'Полное сопровождение таможенного оформления грузов'
    },
    {
      icon: '🔍',
      title: 'Поиск поставщиков',
      description: 'Проверенные производители в Китае с гарантией качества'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2>Наши преимущества</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 