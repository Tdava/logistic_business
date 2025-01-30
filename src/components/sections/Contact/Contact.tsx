import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import YandexMap from './YandexMap';
import './Contact.scss';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <section className="contact-hero">
          <h1>Контакты</h1>
          <p>Свяжитесь с нами любым удобным способом</p>
        </section>

        <div className="contact-content">
          <ContactInfo />
          <ContactForm />
        </div>

        <section className="map-section">
          <h2>Как нас найти</h2>
          <YandexMap />
        </section>
      </div>
    </div>
  );
};

export default Contact; 