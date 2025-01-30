import React from 'react';
import './CompanyInfo.scss';

const CompanyInfo: React.FC = () => {
  const advantages = [
    {
      number: '10+',
      title: 'Лет опыта',
      description: 'Работаем с 2013 года'
    },
    {
      number: '1000+',
      title: 'Клиентов',
      description: 'Довольных сотрудничеством'
    },
    {
      number: '5000+',
      title: 'Поставок',
      description: 'Успешно выполненных'
    },
    {
      number: '100+',
      title: 'Партнеров',
      description: 'В Китае и России'
    }
  ];

  return (
    <section className="company-info">
      <div className="info-content">
        <div className="text-content">
          <h2>Мы помогаем бизнесу расти</h2>
          <p>
            Наша компания специализируется на комплексных решениях для бизнеса с Китаем. 
            Мы предоставляем полный спектр услуг: от поиска надежных поставщиков до доставки 
            товара на ваш склад.
          </p>
          <p>
            Благодаря многолетнему опыту и отлаженным процессам, мы гарантируем безопасность 
            и эффективность вашего бизнеса с китайскими партнерами.
          </p>
        </div>
        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-card">
              <div className="number">{advantage.number}</div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo; 