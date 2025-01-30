import React, { useState } from 'react';
import './Testimonials.scss';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  image?: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Александр Петров',
      company: 'ООО "ТехноПром"',
      text: 'Работаем с компанией уже более 3 лет. Очень довольны качеством услуг и профессионализмом сотрудников. Особенно ценим оперативность в решении вопросов.',
      rating: 5
    },
    {
      id: 2,
      name: 'Елена Иванова',
      company: 'ИП Иванова',
      text: 'Благодаря сотрудничеству с компанией смогли наладить стабильные поставки товаров из Китая. Все сроки соблюдаются, документация в порядке.',
      rating: 5
    },
    {
      id: 3,
      name: 'Сергей Михайлов',
      company: 'ООО "Стройматериалы"',
      text: 'Отличный сервис по поиску поставщиков. Помогли найти производителей по очень выгодным ценам. Рекомендуем!',
      rating: 4
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <h2>Отзывы наших клиентов</h2>
      <div className="testimonials-slider">
        <button className="slider-btn prev" onClick={prevSlide}>←</button>
        <div className="testimonial-card">
          <div className="rating">
            {'★'.repeat(testimonials[activeSlide].rating)}
            {'☆'.repeat(5 - testimonials[activeSlide].rating)}
          </div>
          <p className="text">{testimonials[activeSlide].text}</p>
          <div className="author">
            <strong>{testimonials[activeSlide].name}</strong>
            <span>{testimonials[activeSlide].company}</span>
          </div>
        </div>
        <button className="slider-btn next" onClick={nextSlide}>→</button>
      </div>
      <div className="slider-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 