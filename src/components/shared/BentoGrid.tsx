import React from 'react';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ children, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-6 auto-rows-[200px] ${className}`}>
      {children}
    </div>
  );
};

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  span?: 'small' | 'medium' | 'large' | 'wide' | 'tall';
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className = '',
  span = 'medium',
}) => {
  const spanClasses = {
    small: 'md:col-span-2 md:row-span-1',
    medium: 'md:col-span-3 md:row-span-2',
    large: 'md:col-span-4 md:row-span-2',
    wide: 'md:col-span-6 md:row-span-1',
    tall: 'md:col-span-2 md:row-span-3',
  };

  return (
    <div className={`${spanClasses[span]} ${className}`}>
      {children}
    </div>
  );
};
