import React, { useState, useEffect } from 'react';
import './Partners.scss';

const Partners: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const partners = [
    {
      category: 'Транспортные компании',
      logos: [
        { name: 'РЖД', image: '/assets/images/partners/rzd.png' },
        { name: 'FESCO', image: '/assets/images/partners/fesco.png' },
        { name: 'MAERSK', image: '/assets/images/partners/maersk.png' },
        { name: 'COSCO', image: '/assets/images/partners/cosco.png' }
      ]
    },
    {
      category: 'Таможенные брокеры',
      logos: [
        { name: 'Broker1', image: '/assets/images/partners/broker1.png' },
        { name: 'Broker2', image: '/assets/images/partners/broker2.png' },
        { name: 'Broker3', image: '/assets/images/partners/broker3.png' },
        { name: 'Broker4', image: '/assets/images/partners/broker4.png' }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % partners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="partners">
      <div className="container">
        <h2>Наши партнеры</h2>
        <div className="partners-slider">
          <div 
            className="slider-track" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {partners.map((group, index) => (
              <div key={index} className="partner-group">
                <h3>{group.category}</h3>
                <div className="logos-grid">
                  {group.logos.map((logo, logoIndex) => (
                    <div key={logoIndex} className="logo-item">
                      <img 
                        src={logo.image} 
                        alt={logo.name}
                        onError={(e) => {
                          // Fallback если изображение не загрузилось
                          e.currentTarget.src = '/assets/images/placeholder.png';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="slider-dots">
          {partners.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners; 