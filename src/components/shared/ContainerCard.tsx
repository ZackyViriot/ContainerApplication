import React from 'react';
import type { Container } from '../../types/container.types';
import { formatCurrency, formatDimensions } from '../../utils/formatters';
import { Button } from './Button';
import { Card } from './Card';

interface ContainerCardProps {
  container: Container;
  onSelect?: () => void;
  showDetails?: boolean;
  selected?: boolean;
}

export const ContainerCard: React.FC<ContainerCardProps> = ({
  container,
  onSelect,
  showDetails = true,
  selected = false,
}) => {
  return (
    <Card
      className={`relative ${selected ? 'ring-2 ring-emerald-600' : ''} ${onSelect ? 'cursor-pointer' : ''}`}
      padding="none"
      hover={!!onSelect}
      onClick={onSelect}
    >
      {container.isPopular && (
        <div className="absolute top-4 right-4 z-10 bg-emerald-600 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
          Most Popular
        </div>
      )}
      <div className="relative h-52 overflow-hidden rounded-t-lg">
        <img
          src={container.image}
          alt={container.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{container.name}</h3>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-extrabold text-emerald-600">
            {formatCurrency(container.basePrice)}
          </span>
          <span className="text-sm text-slate-500 font-medium">starting price</span>
        </div>
        <p className="text-sm text-slate-600 mb-4 font-medium">
          {formatDimensions(container.dimensions.length, container.dimensions.width, container.dimensions.height)}
        </p>
        {showDetails && (
          <>
            <div className="mb-6">
              <h4 className="text-sm font-bold text-slate-700 mb-3">Best For:</h4>
              <ul className="space-y-2">
                {container.bestFor.slice(0, 3).map((use, index) => (
                  <li key={index} className="text-sm text-slate-600 flex items-start">
                    <span className="text-emerald-600 mr-2 font-bold">•</span>
                    {use}
                  </li>
                ))}
              </ul>
            </div>
            {!onSelect && (
              <Button to="/quote" variant="primary" fullWidth>
                Get Quote
              </Button>
            )}
          </>
        )}
        {onSelect && (
          <Button variant={selected ? 'primary' : 'outline'} fullWidth onClick={onSelect}>
            {selected ? 'Selected' : 'Select This Size'}
          </Button>
        )}
      </div>
    </Card>
  );
};
