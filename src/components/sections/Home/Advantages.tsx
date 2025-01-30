import React, { useState } from 'react';
import './Advantages.scss';

interface Advantage {
  id: number;
  icon: string;
  title: string;
  description: string;
  stats: {
    value: string;
    label: string;
  }[];
}

const Advantages: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const advantages: Advantage[] = [
    {
      id: 1,
      icon: '🌐',
      title: 'Глобальное присутствие',
      description: 'Развитая сеть представительств и партнеров по всему миру позволяет организовать доставку из любой точки Китая.',
      stats: [
        { value: '15+', label: 'стран присутствия' },
        { value: '50+', label: 'городов доставки' },
        { value: '100+', label: 'партнеров' }
      ]
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Скорость работы',
      description: 'Оптимизированные маршруты и отлаженные процессы позволяют обеспечить минимальные сроки доставки.',
      stats: [
        { value: '24/7', label: 'поддержка' },
        { value: '-30%', label: 'экономия времени' },
        { value: '98%', label: 'вовремя' }
      ]
    },
    {
      id: 3,
      icon: '🛡️',
      title: 'Надежность и безопасность',
      description: 'Страхование грузов, тщательный контроль на всех этапах и профессиональное таможенное оформление.',
      stats: [
        { value: '0%', label: 'потерь' },
        { value: '100%', label: 'страховка' },
        { value: '10+', label: 'лет опыта' }
      ]
    }
  ];

  return (
    <section className="advantages">
      <div className="container">
        <h2>Почему выбирают нас</h2>
        <div className="advantages-grid">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className={`advantage-card ${activeCard === advantage.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveCard(advantage.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="card-content">
                <div className="icon-wrapper">
                  <span className="icon">{advantage.icon}</span>
                </div>
                <h3>{advantage.title}</h3>
                <p className="description">{advantage.description}</p>
                <div className="stats-grid">
                  {advantage.stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                      <span className="value">{stat.value}</span>
                      <span className="label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hover-content">
                <div className="learn-more">
                  <span className="text">Подробнее</span>
                  <span className="arrow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="advantages-cta">
          <button 
            className="btn primary"
            onClick={() => document.getElementById('callback')?.scrollIntoView()}
          >
            Начать сотрудничество
          </button>
        </div>
      </div>
    </section>
  );
};

export default Advantages; 