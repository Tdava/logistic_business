import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.scss';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🔍',
      title: 'Поиск поставщиков',
      description: 'Подбор надежных производителей в Китае. Проверка репутации, аудит производства, контроль качества продукции.',
      features: [
        'Анализ рынка производителей',
        'Проверка документации',
        'Контроль качества образцов',
        'Аудит производства'
      ]
    },
    {
      icon: '📦',
      title: 'Доставка грузов',
      description: 'Комплексные решения по доставке грузов из Китая всеми видами транспорта.',
      features: [
        'Морские перевозки',
        'Железнодорожные перевозки',
        'Авиаперевозки',
        'Мультимодальные перевозки'
      ]
    },
    {
      icon: '📋',
      title: 'Таможенное оформление',
      description: 'Полное сопровождение таможенного оформления грузов из Китая.',
      features: [
        'Подготовка документации',
        'Расчет таможенных платежей',
        'Оформление деклараций',
        'Получение разрешений'
      ]
    },
    {
      icon: '💳',
      title: 'Оплата поставщикам',
      description: 'Безопасные способы оплаты китайским поставщикам с конвертацией валют.',
      features: [
        'Международные переводы',
        'Выгодный курс конвертации',
        'Безопасные сделки',
        'Финансовая отчетность'
      ]
    }
  ];

  return (
    <div className="services-page">
      <div className="container">
        <section className="services-hero">
          <h1>Наши услуги</h1>
          <p>Комплексные решения для вашего бизнеса с Китаем</p>
        </section>

        <section className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </section>

        <section className="services-cta">
          <h2>Нужна консультация?</h2>
          <p>Оставьте заявку, и мы свяжемся с вами для обсуждения вашего проекта</p>
          <button 
            className="btn primary"
            onClick={() => document.getElementById('callback')?.scrollIntoView()}
          >
            Получить консультацию
          </button>
        </section>
      </div>
    </div>
  );
};

export default Services; 