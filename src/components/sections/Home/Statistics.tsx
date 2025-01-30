import React, { useState, useEffect, useRef } from 'react';
import './Statistics.scss';

interface StatItem {
  number: number;
  suffix: string;
  label: string;
}

const Statistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats: StatItem[] = [
    { number: 1000, suffix: '+', label: 'Успешных поставок' },
    { number: 100, suffix: '+', label: 'Постоянных клиентов' },
    { number: 10, suffix: '', label: 'Лет на рынке' },
    { number: 50, suffix: '+', label: 'Городов доставки' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const AnimatedNumber: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isVisible) {
        let start = 0;
        const increment = value / 50;
        const timer = setInterval(() => {
          start += increment;
          if (start >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 20);

        return () => clearInterval(timer);
      }
    }, [isVisible, value]);

    return (
      <span className="number">
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section className="statistics" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <AnimatedNumber value={stat.number} suffix={stat.suffix} />
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics; 