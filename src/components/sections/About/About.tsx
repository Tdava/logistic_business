import React from 'react';
import CompanyInfo from './CompanyInfo';
import Testimonials from './Testimonials';
import './About.scss';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="container">
        <section className="about-hero">
          <h1>О компании</h1>
          <p>Ваш надежный партнер в бизнесе с Китаем</p>
        </section>

        <CompanyInfo />
        <Testimonials />

        <section className="about-cta">
          <h2>Готовы начать сотрудничество?</h2>
          <p>Свяжитесь с нами для обсуждения вашего проекта</p>
          <button 
            className="btn primary"
            onClick={() => document.getElementById('callback')?.scrollIntoView()}
          >
            Связаться с нами
          </button>
        </section>
      </div>
    </div>
  );
};

export default About; 