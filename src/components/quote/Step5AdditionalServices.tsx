import React from 'react';
import type { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';
import type { QuoteFormData, AdditionalService } from '../../types/quote.types';
import { Clock, RefreshCw, FileText, Calendar } from 'lucide-react';

interface Step5Props {
  register: UseFormRegister<QuoteFormData>;
  errors: FieldErrors<QuoteFormData>;
  watch: UseFormWatch<QuoteFormData>;
}

const services: {
  value: AdditionalService;
  label: string;
  description: string;
  fee: number;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    value: 'same_day_delivery',
    label: 'Same-Day Delivery',
    description: 'Get your dumpster delivered today if you order before noon',
    fee: 75,
    icon: Clock,
  },
  {
    value: 'swap_out',
    label: 'Additional Swap-Out',
    description: 'Exchange full container for an empty one during rental period',
    fee: 100,
    icon: RefreshCw,
  },
  {
    value: 'permit_assistance',
    label: 'Permit Assistance',
    description: "We'll help you obtain necessary permits for street placement",
    fee: 50,
    icon: FileText,
  },
  {
    value: 'weekend_delivery',
    label: 'Weekend Delivery',
    description: 'Saturday or Sunday delivery available',
    fee: 50,
    icon: Calendar,
  },
];

export const Step5AdditionalServices: React.FC<Step5Props> = ({ register, watch }) => {
  const selectedServices = watch('additionalServices') || [];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Additional Services</h2>
      <p className="text-gray-600 mb-8">
        Enhance your rental with these optional services. Select all that apply.
      </p>

      <div className="space-y-4">
        {services.map((service) => {
          const Icon = service.icon;
          const isSelected = selectedServices.includes(service.value);

          return (
            <label
              key={service.value}
              className={`flex items-start p-5 rounded-lg border-2 cursor-pointer transition-all hover:shadow-lg ${
                isSelected
                  ? 'border-blue-600 bg-blue-50 shadow-md'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <input
                type="checkbox"
                value={service.value}
                {...register('additionalServices')}
                className="mt-1 mr-4 h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
              />

              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{service.label}</h3>
                  </div>
                  <span className="text-sm font-semibold text-blue-600">
                    +${service.fee}
                  </span>
                </div>
                <p className="text-sm text-gray-600 ml-11">{service.description}</p>
              </div>
            </label>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>Tip:</strong> No additional services selected? That's perfectly fine! These are optional upgrades to enhance your experience.
        </p>
      </div>
    </div>
  );
};
