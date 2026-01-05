import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  hover = false,
  onClick,
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverClass = hover ? 'hover:shadow-md hover:border-slate-300 transition-all duration-200' : '';
  const cursorClass = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={`bg-white rounded-lg border border-slate-200 shadow-sm ${paddingClasses[padding]} ${hoverClass} ${cursorClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
