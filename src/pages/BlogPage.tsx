import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BlogPost, categories, blogPosts } from '../data/blogData';
import '../styles/BlogPage.scss';

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPosts = blogPosts
    .filter(post => activeCategory === 'all' || post.category === activeCategory)
    .filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <>
      <Helmet>
        <title>Блог о логистике | Название компании</title>
        <meta name="description" content="Актуальные статьи и новости в сфере международной логистики" />
      </Helmet>
      <div className="blog-page">
        <div className="container">
          <h1>Блог о логистике</h1>
          <div className="blog-filters">
            {/* Фильтры из компонента Blog */}
          </div>
          <div className="blog-grid">
            {/* Карточки статей из компонента Blog */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage; 