import React from 'react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Check } from 'lucide-react';
import type { QuoteFormData, ContainerSize } from '../../types/quote.types';
import { containers } from '../../data/containers';
import { formatCurrency, formatDimensions } from '../../utils/formatters';

interface Step2Props {
  register: UseFormRegister<QuoteFormData>;
  errors: FieldErrors<QuoteFormData>;
  value?: ContainerSize;
}

export const Step2Container: React.FC<Step2Props> = ({ register, errors, value }) => {
  return (
    <div>
      <h2 className="text-2xl font-black text-slate-900 mb-2">Choose Your Container Size</h2>
      <p className="text-slate-600 mb-8">
        Select the dumpster size that best fits your project needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {containers.map((container) => {
          const isSelected = value === container.size;

          return (
            <label
              key={container.id}
              className={`group relative flex flex-col rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg overflow-hidden ${
                isSelected
                  ? 'border-lime-500 shadow-lg shadow-lime-500/20'
                  : 'border-slate-200 hover:border-lime-300'
              }`}
            >
              <input
                type="radio"
                value={container.size}
                {...register('containerSize', { required: 'Please select a container size' })}
                className="sr-only"
              />

              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={container.image}
                  alt={container.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {container.isPopular && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-lime-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}
                {isSelected && (
                  <div className="absolute top-3 right-3 bg-gradient-to-br from-lime-500 to-emerald-500 text-white rounded-full p-2 shadow-lg">
                    <Check className="h-5 w-5" />
                  </div>
                )}
                {/* Gradient overlay on selected */}
                {isSelected && (
                  <div className="absolute inset-0 bg-gradient-to-t from-lime-500/20 to-transparent" />
                )}
              </div>

              {/* Content */}
              <div className={`p-5 ${isSelected ? 'bg-gradient-to-br from-lime-50 to-emerald-50' : 'bg-white'}`}>
                <h3 className="text-lg font-black text-slate-900 mb-1">{container.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className={`text-2xl font-black ${isSelected ? 'bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent' : 'text-lime-600'}`}>
                    {formatCurrency(container.basePrice)}
                  </span>
                  <span className="text-sm text-slate-500">starting</span>
                </div>
                <p className="text-sm text-slate-600 mb-3">
                  {formatDimensions(container.dimensions.length, container.dimensions.width, container.dimensions.height)}
                </p>
                <div>
                  <p className="text-xs font-bold text-slate-700 mb-1">Best for:</p>
                  <ul className="text-xs text-slate-600 space-y-0.5">
                    {container.bestFor.slice(0, 2).map((use, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-lime-500 mr-1">•</span> {use}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </label>
          );
        })}
      </div>

      {errors.containerSize && (
        <p className="mt-4 text-sm text-red-500 font-medium">{errors.containerSize.message}</p>
      )}
    </div>
  );
};
