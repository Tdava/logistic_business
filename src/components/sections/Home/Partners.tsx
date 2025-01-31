import React, { useState } from 'react';
import './Partners.scss';

type PartnerCategory = 'all' | 'sea' | 'rail' | 'air' | 'customs';

interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
  details: string;
  category: PartnerCategory;
}

const Partners: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PartnerCategory>('all');

  const categories = [
    { id: 'all', label: 'Все партнеры' },
    { id: 'sea', label: 'Морские перевозки' },
    { id: 'rail', label: 'Ж/Д перевозки' },
    { id: 'air', label: 'Авиаперевозки' },
    { id: 'customs', label: 'Таможенное оформление' }
  ];

  const partners: Partner[] = [
    {
      id: 1,
      name: 'COSCO Shipping',
      logo: `https://via.placeholder.com/200x100?text=${encodeURIComponent('COSCO Shipping')}`,
      description: 'Крупнейшая судоходная компания',
      details: 'Более 1300 судов, глобальная сеть в 160 странах, специализация на контейнерных перевозках из Китая',
      category: 'sea'
    },
    {
      id: 2,
      name: 'Maersk',
      logo: `https://via.placeholder.com/200x100?text=${encodeURIComponent('Maersk')}`,
      description: 'Мировой лидер контейнерных перевозок',
      details: 'Датская компания с 100-летней историей, инновационные решения в логистике, собственный флот контейнеровозов',
      category: 'sea'
    },
    {
      id: 3,
      name: 'China Railways',
      logo: `https://via.placeholder.com/200x100?text=${encodeURIComponent('China Railways')}`,
      description: 'Железнодорожные перевозки из Китая',
      details: 'Крупнейший железнодорожный оператор Китая, развитая сеть маршрутов, регулярные контейнерные поезда',
      category: 'rail'
    },
    {
      id: 4,
      name: 'MSC',
      logo: `https://via.placeholder.com/200x100?text=${encodeURIComponent('MSC')}`,
      description: 'Mediterranean Shipping Company',
      details: 'Швейцарская компания, второй крупнейший контейнерный перевозчик в мире, более 570 судов',
      category: 'sea'
    },
    {
      id: 5,
      name: 'CMA CGM',
      logo: `https://via.placeholder.com/200x100?text=${encodeURIComponent('CMA CGM')}`,
      description: 'Международные морские перевозки',
      details: 'Французская судоходная компания, специализация на контейнерных перевозках, более 500 судов',
      category: 'sea'
    }
  ];

  const filteredPartners = partners.filter(
    partner => activeCategory === 'all' || partner.category === activeCategory
  );

  return (
    <section className="partners" id="partners">
      <div className="container">
        <h2>Наши партнеры</h2>
        <p className="section-description">
          Мы сотрудничаем с крупнейшими международными компаниями в сфере логистики
        </p>
        
        <div className="partners-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id as PartnerCategory)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="partners-grid">
          {filteredPartners.map(partner => (
            <div key={partner.id} className="partner-card" title={partner.details}>
              <div className="partner-logo">
                <img src={partner.logo} alt={partner.name} />
              </div>
              <h3>{partner.name}</h3>
              <p>{partner.description}</p>
              <span className="category-badge">{
                categories.find(cat => cat.id === partner.category)?.label
              }</span>
            </div>
          ))}
        </div>

        <div className="become-partner">
          <button 
            className="btn primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Стать партнером
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners; 