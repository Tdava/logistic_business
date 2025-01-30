import React, { useState } from 'react';
import './Reviews.scss';

interface Review {
  id: number;
  author: string;
  company: string;
  text: string;
  rating: number;
  date: string;
  image?: string;
  verified: boolean;
}

const Reviews: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<number | null>(null);

  const reviews: Review[] = [
    {
      id: 1,
      author: 'Александр Иванов',
      company: 'ООО "ТехноПром"',
      text: 'Сотрудничаем с компанией уже более двух лет. За это время было реализовано более 50 поставок различного оборудования из Китая. Особенно хочется отметить профессионализм менеджеров и оперативность в решении возникающих вопросов.',
      rating: 5,
      date: '15.03.2024',
      image: '/assets/images/reviews/review1.jpg',
      verified: true
    },
    {
      id: 2,
      author: 'Елена Петрова',
      company: 'ИП Петрова Е.А.',
      text: 'Благодаря команде профессионалов удалось наладить стабильные поставки текстиля. Все сроки соблюдаются, документация всегда в порядке. Рекомендую как надежного партнера.',
      rating: 5,
      date: '10.03.2024',
      verified: true
    },
    {
      id: 3,
      author: 'Михаил Сидоров',
      company: 'ООО "МебельПлюс"',
      text: 'Отличный сервис по поиску поставщиков. Помогли найти производителей мебельной фурнитуры по очень выгодным ценам. Доставка была организована точно в срок.',
      rating: 4,
      date: '05.03.2024',
      image: '/assets/images/reviews/review3.jpg',
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  const filterReviews = (rating: number | null) => {
    setActiveFilter(rating);
  };

  const filteredReviews = activeFilter
    ? reviews.filter(review => review.rating === activeFilter)
    : reviews;

  return (
    <section className="reviews">
      <div className="container">
        <h2>Отзывы наших клиентов</h2>
        <div className="rating-filter">
          <button
            className={`filter-btn ${activeFilter === null ? 'active' : ''}`}
            onClick={() => filterReviews(null)}
          >
            Все отзывы
          </button>
          {[5, 4, 3].map(rating => (
            <button
              key={rating}
              className={`filter-btn ${activeFilter === rating ? 'active' : ''}`}
              onClick={() => filterReviews(rating)}
            >
              {rating} {renderStars(rating)}
            </button>
          ))}
        </div>
        <div className="reviews-grid">
          {filteredReviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="author-info">
                  <h3>{review.author}</h3>
                  <p className="company">{review.company}</p>
                  {review.verified && (
                    <span className="verified-badge">✓ Проверенный клиент</span>
                  )}
                </div>
                <div className="rating">
                  {renderStars(review.rating)}
                </div>
              </div>
              <p className="review-text">{review.text}</p>
              {review.image && (
                <div className="review-image">
                  <img src={review.image} alt="Фото от клиента" />
                </div>
              )}
              <div className="review-footer">
                <span className="date">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="reviews-cta">
          <button 
            className="btn primary"
            onClick={() => document.getElementById('callback')?.scrollIntoView()}
          >
            Оставить отзыв
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews; 