import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.scss';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
}

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Все статьи' },
    { id: 'customs', label: 'Таможенное оформление' },
    { id: 'delivery', label: 'Способы доставки' },
    { id: 'china', label: 'Работа с Китаем' },
    { id: 'documentation', label: 'Документация' },
    { id: 'analytics', label: 'Аналитика рынка' }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Как выбрать надежного поставщика в Китае: пошаговая инструкция',
      excerpt: 'Практические советы по поиску и проверке китайских производителей, основные критерии выбора и красные флаги.',
      image: '/assets/images/blog/suppliers.jpg',
      date: '15 марта 2024',
      readTime: 8,
      category: 'china',
      tags: ['поставщики', 'проверка компаний', 'производство']
    },
    {
      id: 2,
      title: 'Таможенное оформление грузов из Китая в 2024 году: что изменилось',
      excerpt: 'Обзор последних изменений в таможенном законодательстве и их влияние на импорт товаров.',
      image: '/assets/images/blog/customs.jpg',
      date: '10 марта 2024',
      readTime: 12,
      category: 'customs',
      tags: ['таможня', 'законодательство', 'импорт']
    },
    {
      id: 3,
      title: 'Морская vs Железнодорожная доставка: что выбрать в 2024',
      excerpt: 'Сравнительный анализ способов доставки грузов из Китая, их преимущества и недостатки.',
      image: '/assets/images/blog/shipping.jpg',
      date: '5 марта 2024',
      readTime: 10,
      category: 'delivery',
      tags: ['морские перевозки', 'жд перевозки', 'логистика']
    }
  ];

  const filteredPosts = blogPosts
    .filter(post => activeCategory === 'all' || post.category === activeCategory)
    .filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <section className="blog" id="blog">
      <div className="container">
        <h2>Блог о логистике</h2>
        <p className="section-description">
          Актуальные статьи, новости и аналитика в сфере международной логистики
        </p>

        <div className="blog-filters">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Поиск по статьям..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="categories">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="blog-grid">
          {filteredPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="card-image">
                <img src={post.image} alt={post.title} />
                <div className="category-badge">{categories.find(c => c.id === post.category)?.label}</div>
              </div>
              <div className="card-content">
                <div className="card-meta">
                  <span className="date">{post.date}</span>
                  <span className="read-time">
                    <span className="icon">⏱️</span>
                    {post.readTime} мин чтения
                  </span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="tag">#{tag}</span>
                  ))}
                </div>
                <button className="read-more">
                  Читать статью
                  <span className="arrow">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-footer">
          <Link to="/blog" className="view-all">
            Смотреть все статьи
            <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog; 