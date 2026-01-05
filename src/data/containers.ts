import type { Container } from '../types/container.types';

export const containers: Container[] = [
  {
    id: '10-yard',
    name: '10-Yard Dumpster',
    size: '10-yard',
    basePrice: 275,
    dimensions: {
      length: 14,
      width: 8,
      height: 4,
    },
    capacity: '10 cubic yards',
    bestFor: ['Small cleanouts', 'Garage cleanup', 'Minor renovations', 'Yard debris'],
    typicalProjects: [
      'Bathroom remodel',
      'Small deck removal',
      'Garage cleanout',
      'Landscaping waste',
    ],
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop',
  },
  {
    id: '15-yard',
    name: '15-Yard Dumpster',
    size: '15-yard',
    basePrice: 325,
    dimensions: {
      length: 16,
      width: 8,
      height: 5,
    },
    capacity: '15 cubic yards',
    bestFor: ['Medium cleanouts', 'Kitchen remodels', 'Flooring removal', 'Junk removal'],
    typicalProjects: [
      'Kitchen renovation',
      'Carpet removal',
      'Garage cleanout',
      'Estate cleanout',
    ],
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop',
  },
  {
    id: '20-yard',
    name: '20-Yard Dumpster',
    size: '20-yard',
    basePrice: 375,
    dimensions: {
      length: 22,
      width: 8,
      height: 4.5,
    },
    capacity: '20 cubic yards',
    bestFor: ['Medium construction', 'Roof replacement', 'Large cleanouts', 'Deck removal'],
    typicalProjects: [
      'Roof replacement',
      'Large deck removal',
      'Multi-room renovation',
      'Whole house cleanout',
    ],
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop',
  },
  {
    id: '30-yard',
    name: '30-Yard Dumpster',
    size: '30-yard',
    basePrice: 425,
    dimensions: {
      length: 23,
      width: 8,
      height: 5.5,
    },
    capacity: '30 cubic yards',
    bestFor: ['Large construction', 'Commercial projects', 'Major demolition', 'New construction'],
    typicalProjects: [
      'New construction',
      'Large home additions',
      'Commercial renovations',
      'Major demolition',
    ],
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop',
  },
  {
    id: '40-yard',
    name: '40-Yard Dumpster',
    size: '40-yard',
    basePrice: 500,
    dimensions: {
      length: 23,
      width: 8,
      height: 7,
    },
    capacity: '40 cubic yards',
    bestFor: ['Large construction', 'Commercial demolition', 'Major projects', 'Industrial use'],
    typicalProjects: [
      'Commercial construction',
      'Large demolition projects',
      'Industrial cleanup',
      'Major commercial renovations',
    ],
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop',
  },
  {
    id: '7-yard-washout',
    name: '7-Yard Concrete Washout',
    size: '7-yard-washout',
    basePrice: 350,
    dimensions: {
      length: 16,
      width: 7,
      height: 2,
    },
    capacity: '7 cubic yards (holds ~40 mixer trucks)',
    bestFor: ['Concrete cleanup', 'Environmental compliance', 'Construction sites', 'Concrete contractors'],
    typicalProjects: [
      'Commercial construction',
      'Residential foundations',
      'Concrete paving',
      'EPA compliance',
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop',
  },
  {
    id: '9-yard-breakout',
    name: '9-Yard Concrete Breakout',
    size: '9-yard-breakout',
    basePrice: 400,
    dimensions: {
      length: 16,
      width: 7,
      height: 3,
    },
    capacity: '9 cubic yards',
    bestFor: ['Concrete disposal', 'Asphalt removal', 'Masonry waste', 'Heavy materials'],
    typicalProjects: [
      'Sidewalk removal',
      'Driveway demolition',
      'Foundation breakout',
      'Masonry disposal',
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop',
  },
];

export const getContainerById = (id: string): Container | undefined => {
  return containers.find((container) => container.id === id);
};

export const getContainerBySize = (size: string): Container | undefined => {
  return containers.find((container) => container.size === size);
};
