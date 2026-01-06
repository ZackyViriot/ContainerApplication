import React from 'react';
import type { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';
import type { QuoteFormData, AdditionalService } from '../../types/quote.types';
import { Clock, RefreshCw, FileText, Calendar, Check } from 'lucide-react';

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
      <h2 className="text-2xl font-black text-slate-900 mb-2">Additional Services</h2>
      <p className="text-slate-600 mb-8">
        Enhance your rental with these optional services. Select all that apply.
      </p>

      <div className="space-y-4">
        {services.map((service) => {
          const Icon = service.icon;
          const isSelected = selectedServices.includes(service.value);

          return (
            <label
              key={service.value}
              className={`group relative flex items-start p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                isSelected
                  ? 'border-lime-500 bg-gradient-to-br from-lime-50 to-emerald-50 shadow-lg shadow-lime-500/20'
                  : 'border-slate-200 hover:border-lime-300 bg-white'
              }`}
            >
              {/* Custom checkbox */}
              <div className="relative flex-shrink-0 mr-4 mt-0.5">
                <input
                  type="checkbox"
                  value={service.value}
                  {...register('additionalServices')}
                  className="sr-only"
                />
                <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-br from-lime-500 to-emerald-500 border-lime-500'
                    : 'border-slate-300 group-hover:border-lime-400'
                }`}>
                  {isSelected && <Check className="w-4 h-4 text-white" />}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-br from-lime-500 to-emerald-500 text-white shadow-lg'
                        : 'bg-slate-100 text-slate-600 group-hover:bg-lime-100 group-hover:text-lime-600'
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-black text-slate-900">{service.label}</h3>
                  </div>
                  <span className={`text-sm font-bold ${isSelected ? 'text-lime-600' : 'text-slate-600'}`}>
                    +${service.fee}
                  </span>
                </div>
                <p className="text-sm text-slate-600 ml-12">{service.description}</p>
              </div>
            </label>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-br from-lime-50 to-emerald-50 border border-lime-200 rounded-xl">
        <p className="text-sm text-slate-700">
          <strong>Tip:</strong> No additional services selected? That's perfectly fine! These are optional upgrades to enhance your experience.
        </p>
      </div>
    </div>
  );
};
