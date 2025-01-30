export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
}

export const categories = [
  { id: 'all', label: 'Все статьи' },
  { id: 'customs', label: 'Таможенное оформление' },
  { id: 'delivery', label: 'Способы доставки' },
  { id: 'china', label: 'Работа с Китаем' },
  { id: 'documentation', label: 'Документация' },
  { id: 'analytics', label: 'Аналитика рынка' }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Как выбрать надежного поставщика в Китае: пошаговая инструкция',
    excerpt: 'Практические советы по поиску и проверке китайских производителей, основные критерии выбора и красные флаги.',
    image: '/images/blog/suppliers.jpg',
    date: '15 марта 2024',
    readTime: 8,
    category: 'china',
    tags: ['поставщики', 'проверка компаний', 'производство']
  },
  {
    id: 2,
    title: 'Таможенное оформление грузов из Китая в 2024 году: что изменилось',
    excerpt: 'Обзор последних изменений в таможенном законодательстве и их влияние на импорт товаров.',
    image: '/images/blog/customs.jpg',
    date: '10 марта 2024',
    readTime: 12,
    category: 'customs',
    tags: ['таможня', 'законодательство', 'импорт']
  },
  {
    id: 3,
    title: 'Морская vs Железнодорожная доставка: что выбрать в 2024',
    excerpt: 'Сравнительный анализ способов доставки грузов из Китая, их преимущества и недостатки.',
    image: '/images/blog/shipping.jpg',
    date: '5 марта 2024',
    readTime: 10,
    category: 'delivery',
    tags: ['морские перевозки', 'жд перевозки', 'логистика']
  }
]; 