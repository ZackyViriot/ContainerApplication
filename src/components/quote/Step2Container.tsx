import React from 'react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
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
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Container Size</h2>
      <p className="text-gray-600 mb-8">
        Select the dumpster size that best fits your project needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {containers.map((container) => {
          const isSelected = value === container.size;

          return (
            <label
              key={container.id}
              className={`relative flex flex-col rounded-lg border-2 cursor-pointer transition-all hover:shadow-lg overflow-hidden ${
                isSelected
                  ? 'border-blue-600 bg-blue-50 shadow-md'
                  : 'border-gray-200 hover:border-blue-300'
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
                  className="w-full h-full object-cover"
                />
                {container.isPopular && (
                  <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                {isSelected && (
                  <div className="absolute top-3 right-3 bg-blue-600 text-white rounded-full p-2">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{container.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold text-blue-600">
                    {formatCurrency(container.basePrice)}
                  </span>
                  <span className="text-sm text-gray-500">starting</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  {formatDimensions(container.dimensions.length, container.dimensions.width, container.dimensions.height)}
                </p>
                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-1">Best for:</p>
                  <ul className="text-xs text-gray-600 space-y-0.5">
                    {container.bestFor.slice(0, 2).map((use, index) => (
                      <li key={index}>• {use}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </label>
          );
        })}
      </div>

      {errors.containerSize && (
        <p className="mt-2 text-sm text-red-500">{errors.containerSize.message}</p>
      )}
    </div>
  );
};
