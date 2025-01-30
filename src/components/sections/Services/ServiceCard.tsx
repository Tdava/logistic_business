import React from 'react';
import './ServiceCard.scss';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button 
        className="btn secondary"
        onClick={() => document.getElementById('calculation')?.scrollIntoView()}
      >
        Рассчитать стоимость
      </button>
    </div>
  );
};

export default ServiceCard; 