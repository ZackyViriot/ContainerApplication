import type { BlogPost } from '../types/container.types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Choose the Right Dumpster Size for Your Project',
    excerpt: 'Selecting the perfect dumpster size can save you time and money. Learn the key factors to consider when choosing between our 10, 15, 20, 30, and 40-yard options.',
    category: 'Tips',
    date: '2025-12-15',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop',
    slug: 'how-to-choose-right-dumpster-size',
  },
  {
    id: '2',
    title: 'Construction Site Waste Management Best Practices',
    excerpt: 'Efficient waste management is crucial for any construction project. Discover best practices for organizing debris, recycling materials, and maintaining a safe job site.',
    category: 'Tips',
    date: '2025-11-28',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop',
    slug: 'construction-waste-management-best-practices',
  },
  {
    id: '3',
    title: 'Concrete Disposal: What You Need to Know',
    excerpt: 'Proper concrete disposal is essential for environmental compliance and project efficiency. Learn about our concrete washout and breakout container options.',
    category: 'Industry News',
    date: '2025-11-10',
    image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&auto=format&fit=crop',
    slug: 'concrete-disposal-what-you-need-to-know',
  },
  {
    id: '4',
    title: '10 Home Renovation Projects That Require a Dumpster',
    excerpt: 'Planning a home renovation? From kitchen remodels to roof replacements, discover which projects benefit most from having a dumpster rental on-site.',
    category: 'Project Ideas',
    date: '2025-10-22',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop',
    slug: '10-home-renovation-projects-requiring-dumpster',
  },
  {
    id: '5',
    title: 'The Environmental Benefits of Proper Waste Disposal',
    excerpt: 'Learn how proper waste sorting and disposal through professional dumpster services contributes to environmental sustainability and reduces landfill waste.',
    category: 'Industry News',
    date: '2025-10-05',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop',
    slug: 'environmental-benefits-proper-waste-disposal',
  },
  {
    id: '6',
    title: 'Dumpster Rental Tips for First-Time Users',
    excerpt: 'Never rented a dumpster before? This comprehensive guide covers everything from sizing to placement, helping you avoid common first-timer mistakes.',
    category: 'Tips',
    date: '2025-09-18',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop',
    slug: 'dumpster-rental-tips-first-time-users',
  },
  {
    id: '7',
    title: 'Spring Cleaning: How a Dumpster Can Help',
    excerpt: 'Make your spring cleaning project easier with a dumpster rental. Learn how to declutter effectively and dispose of unwanted items responsibly.',
    category: 'Project Ideas',
    date: '2025-09-01',
    image: 'https://images.unsplash.com/photo-1583845112247-57c89c49eeef?w=800&auto=format&fit=crop',
    slug: 'spring-cleaning-how-dumpster-can-help',
  },
  {
    id: '8',
    title: 'Understanding Dumpster Weight Limits and Overage Fees',
    excerpt: 'Avoid unexpected charges by understanding weight limits, what materials are heaviest, and how to estimate your project waste accurately.',
    category: 'Tips',
    date: '2025-08-12',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop',
    slug: 'understanding-dumpster-weight-limits',
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getBlogPostsByCategory = (category: BlogPost['category']): BlogPost[] => {
  return blogPosts.filter((post) => post.category === category);
};
