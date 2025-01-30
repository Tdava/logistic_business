import React, { useState } from 'react';
import './FAQ.scss';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: 'Как рассчитывается стоимость доставки?',
      answer: 'Стоимость доставки зависит от нескольких факторов: веса и объема груза, способа доставки (морем, ж/д, авиа), маршрута и срочности. Для точного расчета воспользуйтесь калькулятором на сайте или свяжитесь с нашими менеджерами.'
    },
    {
      question: 'Какие документы нужны для таможенного оформления?',
      answer: 'Основные документы включают: инвойс, упаковочный лист, контракт, сертификаты соответствия и другие разрешительные документы в зависимости от типа товара. Наши специалисты помогут подготовить полный пакет необходимых документов.'
    },
    {
      question: 'Сколько времени занимает доставка из Китая?',
      answer: 'Сроки доставки варьируются в зависимости от способа транспортировки: морем 30-45 дней, ж/д 15-20 дней, авиа 3-7 дней. Точные сроки зависят от города отправления и конечного пункта назначения.'
    },
    {
      question: 'Как проверяется надежность поставщика?',
      answer: 'Мы проводим комплексную проверку поставщиков: анализируем юридические документы, историю компании, производственные мощности, проводим выездной аудит производства и контроль качества образцов продукции.'
    },
    {
      question: 'Возможна ли доставка сборных грузов?',
      answer: 'Да, мы предоставляем услугу консолидации грузов. Это позволяет объединять небольшие партии товаров от разных поставщиков в один контейнер, что значительно снижает стоимость доставки.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <h2>Часто задаваемые вопросы</h2>
        <div className="faq-grid">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="question"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <span className="icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              <div className="answer">
                <div className="answer-content">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="faq-cta">
          <p>Не нашли ответ на свой вопрос?</p>
          <button 
            className="btn primary"
            onClick={() => document.getElementById('callback')?.scrollIntoView()}
          >
            Задать вопрос
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 