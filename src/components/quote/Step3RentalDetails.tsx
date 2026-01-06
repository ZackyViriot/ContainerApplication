import React from 'react';
import type { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';
import type { QuoteFormData } from '../../types/quote.types';
import { Input } from '../shared/Input';
import { Textarea } from '../shared/Textarea';
import { allCities } from '../../data/serviceAreas';
import { Check, Sun, Clock, Calendar } from 'lucide-react';

interface Step3Props {
  register: UseFormRegister<QuoteFormData>;
  errors: FieldErrors<QuoteFormData>;
  watch: UseFormWatch<QuoteFormData>;
}

const deliveryTimes = [
  { value: 'Morning (7am-11am)', label: 'Morning', time: '7am - 11am', icon: Sun },
  { value: 'Afternoon (11am-3pm)', label: 'Afternoon', time: '11am - 3pm', icon: Clock },
  { value: 'Anytime', label: 'Flexible', time: 'Any time works', icon: Calendar },
];

export const Step3RentalDetails: React.FC<Step3Props> = ({ register, errors, watch }) => {
  // Get tomorrow's date as minimum delivery date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  const selectedTime = watch('deliveryTime');

  return (
    <div>
      <h2 className="text-2xl font-black text-slate-900 mb-2">Rental Details</h2>
      <p className="text-slate-600 mb-8">
        Tell us when and where you need the dumpster delivered.
      </p>

      <div className="space-y-6">
        {/* Rental Duration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Rental Duration (days) <span className="text-red-500">*</span>
            </label>
            <select
              {...register('rentalDuration', {
                required: 'Please select rental duration',
                valueAsNumber: true,
              })}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 hover:border-slate-400 transition-all bg-white"
            >
              <option value="7">7 days (included)</option>
              <option value="10">10 days</option>
              <option value="14">14 days</option>
              <option value="21">21 days</option>
              <option value="30">30 days</option>
            </select>
            {errors.rentalDuration && (
              <p className="mt-1 text-sm text-red-500">{errors.rentalDuration.message}</p>
            )}
            <p className="mt-1.5 text-xs text-slate-500">First 7 days included in base price</p>
          </div>

          <div>
            <Input
              type="date"
              label="Delivery Date"
              {...register('deliveryDate', { required: 'Please select a delivery date' })}
              error={errors.deliveryDate?.message}
              min={minDate}
              required
            />
          </div>
        </div>

        {/* Delivery Time */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            Preferred Delivery Time <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {deliveryTimes.map((time) => {
              const Icon = time.icon;
              const isSelected = selectedTime === time.value;

              return (
                <label
                  key={time.value}
                  className={`group relative flex flex-col items-center p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    isSelected
                      ? 'border-lime-500 bg-gradient-to-br from-lime-50 to-emerald-50 shadow-lg shadow-lime-500/20'
                      : 'border-slate-200 hover:border-lime-300 bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    value={time.value}
                    {...register('deliveryTime', { required: 'Please select a delivery time' })}
                    className="sr-only"
                  />
                  <div className={`p-3 rounded-xl mb-3 transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-br from-lime-500 to-emerald-500 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 group-hover:bg-lime-100 group-hover:text-lime-600'
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-bold text-slate-900">{time.label}</span>
                  <span className="text-sm text-slate-500">{time.time}</span>
                  {isSelected && (
                    <div className="absolute top-3 right-3 bg-gradient-to-br from-lime-500 to-emerald-500 text-white rounded-full p-1.5 shadow-lg">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                </label>
              );
            })}
          </div>
          {errors.deliveryTime && (
            <p className="mt-2 text-sm text-red-500 font-medium">{errors.deliveryTime.message}</p>
          )}
        </div>

        {/* Delivery Address */}
        <div className="border-t border-slate-200 pt-6">
          <h3 className="text-lg font-black text-slate-900 mb-4">Delivery Address</h3>
          <div className="space-y-4">
            <Input
              label="Street Address"
              placeholder="123 Main Street"
              {...register('deliveryAddress.street', { required: 'Street address is required' })}
              error={errors.deliveryAddress?.street?.message}
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('deliveryAddress.city', { required: 'City is required' })}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 hover:border-slate-400 transition-all bg-white"
                >
                  <option value="">Select city...</option>
                  {allCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
                {errors.deliveryAddress?.city && (
                  <p className="mt-1 text-sm text-red-500">{errors.deliveryAddress.city.message}</p>
                )}
              </div>

              <Input
                label="State"
                defaultValue="TX"
                {...register('deliveryAddress.state', { required: 'State is required' })}
                error={errors.deliveryAddress?.state?.message}
                required
              />

              <Input
                label="ZIP Code"
                placeholder="78101"
                {...register('deliveryAddress.zipCode', {
                  required: 'ZIP code is required',
                  pattern: {
                    value: /^\d{5}$/,
                    message: 'Invalid ZIP code',
                  },
                })}
                error={errors.deliveryAddress?.zipCode?.message}
                required
              />
            </div>
          </div>
        </div>

        {/* Placement Location */}
        <Textarea
          label="Placement Instructions"
          placeholder="Where should we place the container? (e.g., driveway, front yard, curbside)"
          rows={3}
          {...register('placementLocation', { required: 'Please provide placement instructions' })}
          error={errors.placementLocation?.message}
          helperText="Be as specific as possible to ensure proper placement"
          required
        />
      </div>
    </div>
  );
};
