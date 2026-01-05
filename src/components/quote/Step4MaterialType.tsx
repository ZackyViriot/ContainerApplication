import React from 'react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
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
      <h2 className="text-2xl font-bold text-gray-900 mb-2">What Will You Be Disposing?</h2>
      <p className="text-gray-600 mb-8">
        Select the primary type of material you'll be putting in the dumpster. This helps us determine disposal fees.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {materialTypes.map((type) => {
          const isSelected = value === type.value;

          return (
            <label
              key={type.value}
              className={`relative flex flex-col p-5 rounded-lg border-2 cursor-pointer transition-all hover:shadow-lg ${
                isSelected
                  ? 'border-blue-600 bg-blue-50 shadow-md'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <input
                type="radio"
                value={type.value}
                {...register('materialType', { required: 'Please select a material type' })}
                className="sr-only"
              />

              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{type.label}</h3>
                {type.fee !== 0 && (
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${
                      type.fee > 0
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {type.fee > 0 ? '+' : ''}${Math.abs(type.fee)} fee
                  </span>
                )}
                {type.fee === 0 && (
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-gray-100 text-gray-700">
                    No fee
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-600 mb-3">{type.description}</p>

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

      {errors.materialType && (
        <p className="mt-2 text-sm text-red-500">{errors.materialType.message}</p>
      )}

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>Note:</strong> Hazardous materials, chemicals, paint, tires, and batteries are not accepted.
          Contact us for special disposal needs.
        </p>
      </div>
    </div>
  );
};
