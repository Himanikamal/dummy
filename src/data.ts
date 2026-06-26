import { Product, BlogPost } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'AirFlex Runner',
    price: '₹999',
    description: 'Lightweight running shoes designed for maximum flexibility and comfort.',
    features: [
      'Breathable mesh upper',
      'Cushioned sole',
      'Lightweight design',
      'Anti-slip grip'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Urban Street Sneakers',
    price: '₹1,299',
    description: 'Modern sneakers perfect for casual wear and everyday fashion.',
    features: [
      'Stylish design',
      'Durable sole',
      'Comfortable padding',
      'Multiple color options'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Comfort Walk Loafers',
    price: '₹899',
    description: 'Elegant loafers suitable for office and casual occasions.',
    features: [
      'Soft inner lining',
      'Premium leather finish',
      'Lightweight construction',
      'Flexible outsole'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1614252339460-e1cbccaae496?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Trail Master Hiking Shoes',
    price: '₹1,499',
    description: 'Built for adventure and rough outdoor terrain.',
    features: [
      'Waterproof material',
      'Strong grip sole',
      'Ankle support',
      'Durable construction'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    name: 'SportX Training Shoes',
    price: '₹1,199',
    description: 'Versatile training shoes for gym workouts and fitness activities.',
    features: [
      'Shock absorption',
      'Breathable fabric',
      'Durable sole',
      'Flexible movement'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Choose the Perfect Running Shoes',
    content: 'Choosing the right running shoes depends on comfort, support, cushioning, and your running style. Always select shoes that fit properly and provide adequate arch support.',
    published: 'June 15, 2026'
  },
  {
    id: '2',
    title: 'Top Footwear Trends of 2026',
    content: 'Fashion trends in footwear are focusing on sustainability, comfort, and minimalistic designs. Sneakers continue to dominate both casual and professional fashion.',
    published: 'June 10, 2026'
  },
  {
    id: '3',
    title: 'Tips to Make Your Shoes Last Longer',
    content: [
      'Clean shoes regularly.',
      'Store them in a dry place.',
      'Use shoe trees when possible.',
      'Avoid excessive exposure to water.'
    ],
    published: 'June 5, 2026'
  },
  {
    id: '4',
    title: 'Why Comfort Matters in Everyday Footwear',
    content: 'Comfortable footwear helps improve posture, reduce foot fatigue, and enhance overall mobility throughout the day.',
    published: 'May 30, 2026'
  }
];
