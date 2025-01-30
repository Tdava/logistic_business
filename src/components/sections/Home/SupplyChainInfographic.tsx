import React from 'react';
import './SupplyChainInfographic.scss';

const SupplyChainInfographic: React.FC = () => {
  const steps = [
    {
      icon: '🏭',
      title: 'Поиск поставщиков',
      description: 'Подбор надежных производителей в Китае'
    },
    {
      icon: '📦',
      title: 'Производство',
      description: 'Контроль качества и сроков изготовления'
    },
    {
      icon: '🚢',
      title: 'Логистика',
      description: 'Доставка морем, ж/д или авиа транспортом'
    },
    {
      icon: '📋',
      title: 'Таможня',
      description: 'Оформление всех необходимых документов'
    },
    {
      icon: '🚛',
      title: 'Доставка',
      description: 'Доставка до вашего склада'
    }
  ];

  return (
    <section className="supply-chain">
      <h2>Как мы работаем</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            {index < steps.length - 1 && <div className="connector" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupplyChainInfographic; 