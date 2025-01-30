import React from 'react';
import './ContactInfo.scss';

const ContactInfo: React.FC = () => {
  const contactDetails = [
    {
      icon: '📱',
      title: 'Телефон',
      content: ['+7 (495) 123-45-67', '+7 (495) 987-65-43'],
      type: 'phone'
    },
    {
      icon: '📧',
      title: 'Email',
      content: ['info@example.com', 'support@example.com'],
      type: 'email'
    },
    {
      icon: '📍',
      title: 'Адрес',
      content: ['Ленинградский проспект 35, строение 2', 'Москва, Россия'],
      type: 'address'
    },
    {
      icon: '🕒',
      title: 'Режим работы',
      content: ['Пн-Пт: 9:00 - 18:00', 'Сб-Вс: выходной'],
      type: 'time'
    }
  ];

  const getContactLink = (type: string, content: string) => {
    switch (type) {
      case 'phone':
        return `tel:${content.replace(/[^0-9+]/g, '')}`;
      case 'email':
        return `mailto:${content}`;
      default:
        return undefined;
    }
  };

  return (
    <div className="contact-info">
      <h2>Наши контакты</h2>
      <div className="info-grid">
        {contactDetails.map((detail, index) => (
          <div key={index} className="info-card">
            <div className="icon">{detail.icon}</div>
            <h3>{detail.title}</h3>
            <div className="content">
              {detail.content.map((item, i) => (
                <div key={i}>
                  {getContactLink(detail.type, item) ? (
                    <a href={getContactLink(detail.type, item)}>{item}</a>
                  ) : (
                    <span>{item}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo; 