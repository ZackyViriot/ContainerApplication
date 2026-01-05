export type ContainerSize = '10-yard' | '15-yard' | '20-yard' | '30-yard' | '40-yard' | '7-yard-washout' | '9-yard-breakout';

export interface Container {
  id: string;
  name: string;
  size: ContainerSize;
  basePrice: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  capacity: string;
  bestFor: string[];
  typicalProjects: string[];
  isPopular?: boolean;
  image: string;
}

export interface ServiceZone {
  zone: number;
  zoneName: string;
  cities: string[];
  deliveryFee: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'Tips' | 'Project Ideas' | 'Industry News';
  date: string;
  image: string;
  slug: string;
}
