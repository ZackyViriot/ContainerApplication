import React from 'react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Check } from 'lucide-react';
import type { QuoteFormData, MaterialType } from '../../types/quote.types';

interface Step4Props {
  register: UseFormRegister<QuoteFormData>;
  errors: FieldErrors<QuoteFormData>;
  value?: MaterialType;
}

const materialTypes: {
  value: MaterialType;
  label: string;
  description: string;
  fee: number;
}[] = [
  {
    value: 'general_waste',
    label: 'General Waste',
    description: 'Household items, furniture, non-hazardous debris',
    fee: 0,
  },
  {
    value: 'construction_debris',
    label: 'Construction Debris',
    description: 'Wood, drywall, roofing materials, flooring',
    fee: 25,
  },
  {
    value: 'yard_waste',
    label: 'Yard Waste',
    description: 'Leaves, branches, grass, landscaping materials',
    fee: -15,
  },
  {
    value: 'concrete',
    label: 'Concrete',
    description: 'Concrete slabs, foundations, sidewalks',
    fee: 50,
  },
  {
    value: 'asphalt',
    label: 'Asphalt',
    description: 'Asphalt paving, roofing shingles',
    fee: 45,
  },
  {
    value: 'dirt_fill',
    label: 'Dirt/Fill',
    description: 'Clean dirt, sand, gravel, fill material',
    fee: 30,
  },
  {
    value: 'mixed_materials',
    label: 'Mixed Materials',
    description: 'Combination of different waste types',
    fee: 35,
  },
];

export const Step4MaterialType: React.FC<Step4Props> = ({ register, errors, value }) => {
  return (
    <div>
      <h2 className="text-2xl font-black text-slate-900 mb-2">What Will You Be Disposing?</h2>
      <p className="text-slate-600 mb-8">
        Select the primary type of material you'll be putting in the dumpster. This helps us determine disposal fees.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {materialTypes.map((type) => {
          const isSelected = value === type.value;

          return (
            <label
              key={type.value}
              className={`group relative flex flex-col p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                isSelected
                  ? 'border-lime-500 bg-gradient-to-br from-lime-50 to-emerald-50 shadow-lg shadow-lime-500/20'
                  : 'border-slate-200 hover:border-lime-300 bg-white'
              }`}
            >
              <input
                type="radio"
                value={type.value}
                {...register('materialType', { required: 'Please select a material type' })}
                className="sr-only"
              />

              <div className="flex items-start justify-between mb-2">
                <h3 className="font-black text-slate-900">{type.label}</h3>
                {type.fee !== 0 && (
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      type.fee > 0
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-emerald-100 text-emerald-700'
                    }`}
                  >
                    {type.fee > 0 ? '+' : ''}${Math.abs(type.fee)} fee
                  </span>
                )}
                {type.fee === 0 && (
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    No fee
                  </span>
                )}
              </div>

              <p className="text-sm text-slate-600 mb-3">{type.description}</p>

              {isSelected && (
                <div className="absolute top-3 right-3 bg-gradient-to-br from-lime-500 to-emerald-500 text-white rounded-full p-1.5 shadow-lg">
                  <Check className="h-4 w-4" />
                </div>
              )}
            </label>
          );
        })}
      </div>

      {errors.materialType && (
        <p className="mt-4 text-sm text-red-500 font-medium">{errors.materialType.message}</p>
      )}

      <div className="mt-6 p-4 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl">
        <p className="text-sm text-slate-700">
          <strong>Note:</strong> Hazardous materials, chemicals, paint, tires, and batteries are not accepted.
          Contact us for special disposal needs.
        </p>
      </div>
    </div>
  );
};
