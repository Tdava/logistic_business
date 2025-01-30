import React, { useState } from 'react';
import './Team.scss';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  photo: string;
  description: string;
  experience: string;
  specialization: string[];
  contacts: {
    email: string;
    linkedin?: string;
  };
}

const Team: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const team: TeamMember[] = [
    {
      id: 1,
      name: 'Александр Петров',
      position: 'Генеральный директор',
      photo: '/assets/images/team/ceo.jpg',
      description: '15 лет опыта в международной логистике. Реализовал более 1000 успешных проектов по доставке грузов из Китая.',
      experience: '15+ лет',
      specialization: ['Стратегическое планирование', 'Развитие бизнеса', 'Международные отношения'],
      contacts: {
        email: 'petrov@logistic.ru',
        linkedin: 'https://linkedin.com/in/petrov'
      }
    },
    {
      id: 2,
      name: 'Елена Соколова',
      position: 'Руководитель отдела логистики',
      photo: '/assets/images/team/logistics-head.jpg',
      description: 'Эксперт в области мультимодальных перевозок и таможенного оформления. Специализируется на оптимизации маршрутов.',
      experience: '10+ лет',
      specialization: ['Мультимодальные перевозки', 'Таможенное оформление', 'Оптимизация маршрутов'],
      contacts: {
        email: 'sokolova@logistic.ru'
      }
    },
    {
      id: 3,
      name: 'Михаил Волков',
      position: 'Руководитель отдела по работе с клиентами',
      photo: '/assets/images/team/client-head.jpg',
      description: 'Профессионал в области клиентского сервиса. Разработал и внедрил систему контроля качества обслуживания.',
      experience: '8+ лет',
      specialization: ['Клиентский сервис', 'Управление проектами', 'Развитие бизнеса'],
      contacts: {
        email: 'volkov@logistic.ru',
        linkedin: 'https://linkedin.com/in/volkov'
      }
    }
  ];

  return (
    <section className="team">
      <div className="container">
        <h2>Наша команда</h2>
        <p className="section-description">
          Профессионалы с многолетним опытом в сфере международной логистики
        </p>
        <div className="team-grid">
          {team.map(member => (
            <div
              key={member.id}
              className={`team-card ${activeCard === member.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveCard(member.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="member-photo">
                <img src={member.photo} alt={member.name} />
                <div className="overlay">
                  <div className="specialization">
                    {member.specialization.map((spec, index) => (
                      <span key={index} className="spec-tag">{spec}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="experience">
                  <span className="icon">⭐</span>
                  Опыт: {member.experience}
                </p>
                <p className="description">{member.description}</p>
                <div className="contacts">
                  <a href={`mailto:${member.contacts.email}`} className="email">
                    <span className="icon">✉️</span>
                    {member.contacts.email}
                  </a>
                  {member.contacts.linkedin && (
                    <a 
                      href={member.contacts.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin"
                    >
                      <span className="icon">🔗</span>
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="team-cta">
          <button 
            className="btn primary"
            onClick={() => document.getElementById('callback')?.scrollIntoView()}
          >
            Связаться с нами
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team; 