import React, { useState } from 'react';
import './Certificates.scss';

interface Certificate {
  id: number;
  title: string;
  description: string;
  image: string;
  issuer: string;
  date: string;
  type: 'certificate' | 'license';
}

const Certificates: React.FC = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'certificate' | 'license'>('all');

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Таможенный представитель',
      description: 'Свидетельство о включении в реестр таможенных представителей',
      image: '/assets/images/certificates/customs.jpg',
      issuer: 'Федеральная таможенная служба',
      date: '2024',
      type: 'license'
    },
    {
      id: 2,
      title: 'ISO 9001:2015',
      description: 'Сертификат соответствия системы менеджмента качества',
      image: '/assets/images/certificates/iso.jpg',
      issuer: 'International Organization for Standardization',
      date: '2023',
      type: 'certificate'
    },
    {
      id: 3,
      title: 'Международные перевозки',
      description: 'Лицензия на осуществление международных грузоперевозок',
      image: '/assets/images/certificates/transport.jpg',
      issuer: 'Министерство транспорта РФ',
      date: '2024',
      type: 'license'
    }
  ];

  const filteredCertificates = activeFilter === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.type === activeFilter);

  return (
    <section className="certificates">
      <div className="container">
        <h2>Сертификаты и лицензии</h2>
        <div className="certificates-filter">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            Все документы
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'certificate' ? 'active' : ''}`}
            onClick={() => setActiveFilter('certificate')}
          >
            Сертификаты
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'license' ? 'active' : ''}`}
            onClick={() => setActiveFilter('license')}
          >
            Лицензии
          </button>
        </div>
        <div className="certificates-grid">
          {filteredCertificates.map(cert => (
            <div 
              key={cert.id} 
              className="certificate-card"
              onClick={() => setActiveModal(cert.id)}
            >
              <div className="certificate-image">
                <img src={cert.image} alt={cert.title} />
                <div className="overlay">
                  <span className="view">Просмотреть</span>
                </div>
              </div>
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <p className="issuer">{cert.issuer}</p>
                <p className="date">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>

        {activeModal && (
          <div className="modal-overlay" onClick={() => setActiveModal(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setActiveModal(null)}>
                ×
              </button>
              {certificates.find(cert => cert.id === activeModal) && (
                <div className="certificate-details">
                  <img 
                    src={certificates.find(cert => cert.id === activeModal)!.image} 
                    alt={certificates.find(cert => cert.id === activeModal)!.title} 
                  />
                  <div className="details-content">
                    <h3>{certificates.find(cert => cert.id === activeModal)!.title}</h3>
                    <p className="description">
                      {certificates.find(cert => cert.id === activeModal)!.description}
                    </p>
                    <p className="issuer">
                      <strong>Выдан:</strong> {certificates.find(cert => cert.id === activeModal)!.issuer}
                    </p>
                    <p className="date">
                      <strong>Действует до:</strong> {certificates.find(cert => cert.id === activeModal)!.date}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates; 