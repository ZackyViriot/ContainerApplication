import React from 'react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Home, Building2, HardHat, Wrench, Trash2, Droplet } from 'lucide-react';
import type { QuoteFormData, ProjectType } from '../../types/quote.types';

interface Step1Props {
  register: UseFormRegister<QuoteFormData>;
  errors: FieldErrors<QuoteFormData>;
  value?: ProjectType;
}

const projectTypes: { value: ProjectType; label: string; icon: React.ComponentType<{ className?: string }>; description: string }[] = [
  {
    value: 'residential',
    label: 'Residential',
    icon: Home,
    description: 'Home cleanouts, renovations, or yard work',
  },
  {
    value: 'commercial',
    label: 'Commercial',
    icon: Building2,
    description: 'Office buildings, retail, or business projects',
  },
  {
    value: 'construction',
    label: 'Construction',
    icon: HardHat,
    description: 'New construction or major building projects',
  },
  {
    value: 'demolition',
    label: 'Demolition',
    icon: Wrench,
    description: 'Tearing down structures or major removals',
  },
  {
    value: 'junk_removal',
    label: 'Junk Removal',
    icon: Trash2,
    description: 'General junk, furniture, or estate cleanouts',
  },
  {
    value: 'concrete_work',
    label: 'Concrete Work',
    icon: Droplet,
    description: 'Concrete pouring, washing, or disposal',
  },
];

export const Step1ProjectType: React.FC<Step1Props> = ({ register, errors, value }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Your Project Type</h2>
      <p className="text-gray-600 mb-8">
        Help us understand your project so we can recommend the best container options.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectTypes.map((type) => {
          const Icon = type.icon;
          const isSelected = value === type.value;

          return (
            <label
              key={type.value}
              className={`relative flex flex-col p-6 rounded-lg border-2 cursor-pointer transition-all hover:shadow-lg ${
                isSelected
                  ? 'border-blue-600 bg-blue-50 shadow-md'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <input
                type="radio"
                value={type.value}
                {...register('projectType', { required: 'Please select a project type' })}
                className="sr-only"
              />
              <div className="flex items-start space-x-3 mb-3">
                <div className={`p-2 rounded-lg ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{type.label}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-600">{type.description}</p>
              {isSelected && (
                <div className="absolute top-3 right-3 bg-blue-600 text-white rounded-full p-1">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </label>
          );
        })}
      </div>

      {errors.projectType && (
        <p className="mt-2 text-sm text-red-500">{errors.projectType.message}</p>
      )}
    </div>
  );
};
