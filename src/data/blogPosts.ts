export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'cultural-exchange-benefits',
    title: 'The Benefits of Cultural Exchange Programs',
    excerpt: 'Discover how cultural exchange programs can broaden your horizons and create lasting global connections.',
    content: `Cultural exchange programs offer numerous benefits that can transform your life and perspective. Through these programs, participants gain:

1. Global Understanding
- Direct experience with different cultures
- Breaking down stereotypes and prejudices
- Building international friendships

2. Personal Growth
- Increased independence and confidence
- Enhanced problem-solving skills
- Improved adaptability

3. Professional Development
- Language skills improvement
- Cross-cultural communication experience
- International networking opportunities

4. Lifelong Impact
- Lasting friendships across borders
- Broader world perspective
- Enhanced career opportunities`,
    author: 'John Doe',
    date: '2024-05-15',
    image: '/images/blog/cultural-exchange.jpg',
    tags: ['Cultural Exchange', 'Education', 'Personal Growth']
  },
  {
    id: 'host-family-experience',
    title: 'Life as a Host Family: A Rewarding Journey',
    excerpt: 'Learn about the joys and experiences of hosting an international student in your home.',
    content: `Hosting an international student is a unique opportunity to:

1. Share Your Culture
- Introduce Ghanaian traditions
- Share local customs and celebrations
- Create cultural bridges

2. Learn About Other Cultures
- Daily cultural exchange
- New perspectives on life
- International friendships

3. Enrich Family Life
- New family dynamics
- Cultural learning for children
- Lasting family bonds

4. Community Impact
- Cultural diversity in your community
- International connections
- Broader understanding`,
    author: 'Sarah Smith',
    date: '2024-05-10',
    image: '/images/blog/host-family.jpg',
    tags: ['Host Family', 'Cultural Exchange', 'Community']
  },
  {
    id: 'ghana-education-system',
    title: "Understanding Ghana's Education System",
    excerpt: "An overview of Ghana's education system and what international students can expect.",
    content: `Ghana's education system offers unique opportunities for international students:

1. Academic Structure
- Primary education (6 years)
- Junior High School (3 years)
- Senior High School (3 years)
- Tertiary education

2. Curriculum
- Comprehensive core subjects
- Cultural integration
- Language learning opportunities

3. School Life
- Daily routines
- Extra-curricular activities
- Social interaction

4. Cultural Integration
- Local customs in schools
- Language immersion
- Cultural activities`,
    author: 'Kwame Mensah',
    date: '2024-05-05',
    image: '/images/blog/education.jpg',
    tags: ['Education', 'Ghana', 'International Students']
  }
];

export const getRecentPosts = () => {
  return blogPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getPostById = (id: string) => {
  return blogPosts.find(post => post.id === id);
};

export const getRelatedPosts = (currentPost: BlogPost) => {
  return blogPosts
    .filter(post => 
      post.id !== currentPost.id && 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, 3);
}; 