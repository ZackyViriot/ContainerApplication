import React from 'react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Home, Building2, HardHat, Wrench, Trash2, Droplet, Check } from 'lucide-react';
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
      <h2 className="text-2xl font-black text-slate-900 mb-2">Select Your Project Type</h2>
      <p className="text-slate-600 mb-8">
        Help us understand your project so we can recommend the best container options.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectTypes.map((type) => {
          const Icon = type.icon;
          const isSelected = value === type.value;

          return (
            <label
              key={type.value}
              className={`group relative flex flex-col p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                isSelected
                  ? 'border-lime-500 bg-gradient-to-br from-lime-50 to-emerald-50 shadow-lg shadow-lime-500/20'
                  : 'border-slate-200 hover:border-lime-300 bg-white'
              }`}
            >
              <input
                type="radio"
                value={type.value}
                {...register('projectType', { required: 'Please select a project type' })}
                className="sr-only"
              />
              <div className="flex items-start space-x-3 mb-3">
                <div className={`p-3 rounded-xl transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-br from-lime-500 to-emerald-500 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 group-hover:bg-lime-100 group-hover:text-lime-600'
                }`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900">{type.label}</h3>
                </div>
              </div>
              <p className="text-sm text-slate-600">{type.description}</p>
              {isSelected && (
                <div className="absolute top-3 right-3 bg-gradient-to-br from-lime-500 to-emerald-500 text-white rounded-full p-1.5 shadow-lg">
                  <Check className="h-4 w-4" />
                </div>
              )}
            </label>
          );
        })}
      </div>

      {errors.projectType && (
        <p className="mt-4 text-sm text-red-500 font-medium">{errors.projectType.message}</p>
      )}
    </div>
  );
};
