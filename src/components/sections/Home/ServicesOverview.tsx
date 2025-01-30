import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesOverview.scss';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      title: 'Поиск поставщиков',
      description: 'Подбор и проверка надежных производителей в Китае',
      link: '/services#sourcing'
    },
    {
      title: 'Доставка грузов',
      description: 'Организация перевозок любым видом транспорта',
      link: '/services#delivery'
    },
    {
      title: 'Таможенное оформление',
      description: 'Полное сопровождение таможенного оформления',
      link: '/services#customs'
    }
  ];

  return (
    <section className="services-overview">
      <div className="container">
        <h2>Наши услуги</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="learn-more">
                Подробнее
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview; 