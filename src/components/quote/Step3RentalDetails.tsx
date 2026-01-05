import React from 'react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { QuoteFormData } from '../../types/quote.types';
import { Input } from '../shared/Input';
import { Textarea } from '../shared/Textarea';
import { allCities } from '../../data/serviceAreas';

interface Step3Props {
  register: UseFormRegister<QuoteFormData>;
  errors: FieldErrors<QuoteFormData>;
}

export const Step3RentalDetails: React.FC<Step3Props> = ({ register, errors }) => {
  // Get tomorrow's date as minimum delivery date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Rental Details</h2>
      <p className="text-gray-600 mb-8">
        Tell us when and where you need the dumpster delivered.
      </p>

      <div className="space-y-6">
        {/* Rental Duration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rental Duration (days) <span className="text-red-500">*</span>
            </label>
            <select
              {...register('rentalDuration', {
                required: 'Please select rental duration',
                valueAsNumber: true,
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <p className="mt-1 text-xs text-gray-500">First 7 days included in base price</p>
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
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Delivery Time
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Morning (7am-11am)', 'Afternoon (11am-3pm)', 'Anytime'].map((time) => (
              <label
                key={time}
                className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-300 transition-all"
              >
                <input
                  type="radio"
                  value={time}
                  {...register('deliveryTime', { required: 'Please select a delivery time' })}
                  className="mr-3"
                />
                <span className="text-sm font-medium text-gray-700">{time}</span>
              </label>
            ))}
          </div>
          {errors.deliveryTime && (
            <p className="mt-1 text-sm text-red-500">{errors.deliveryTime.message}</p>
          )}
        </div>

        {/* Delivery Address */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Delivery Address</h3>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('deliveryAddress.city', { required: 'City is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
