import React from 'react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { QuoteFormData } from '../../types/quote.types';
import { Input } from '../shared/Input';
import { Textarea } from '../shared/Textarea';

interface Step6Props {
  register: UseFormRegister<QuoteFormData>;
  errors: FieldErrors<QuoteFormData>;
}

export const Step6CustomerInfo: React.FC<Step6Props> = ({ register, errors }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Contact Information</h2>
      <p className="text-gray-600 mb-8">
        We'll use this information to send you your quote and coordinate delivery.
      </p>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="First Name"
            placeholder="John"
            {...register('customerInfo.firstName', { required: 'First name is required' })}
            error={errors.customerInfo?.firstName?.message}
            required
          />

          <Input
            label="Last Name"
            placeholder="Doe"
            {...register('customerInfo.lastName', { required: 'Last name is required' })}
            error={errors.customerInfo?.lastName?.message}
            required
          />
        </div>

        <Input
          type="email"
          label="Email Address"
          placeholder="john.doe@example.com"
          {...register('customerInfo.email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          error={errors.customerInfo?.email?.message}
          helperText="We'll send your quote to this email"
          required
        />

        <Input
          type="tel"
          label="Phone Number"
          placeholder="(830) 216-8260"
          {...register('customerInfo.phone', {
            required: 'Phone number is required',
            pattern: {
              value: /^[\d\s\-\(\)]+$/,
              message: 'Invalid phone number',
            },
          })}
          error={errors.customerInfo?.phone?.message}
          helperText="We'll contact you to confirm delivery details"
          required
        />

        <Input
          label="Company Name (Optional)"
          placeholder="ABC Construction"
          {...register('customerInfo.company')}
          error={errors.customerInfo?.company?.message}
        />

        <Textarea
          label="Project Description (Optional)"
          placeholder="Tell us more about your project..."
          rows={4}
          {...register('customerInfo.projectDescription')}
          error={errors.customerInfo?.projectDescription?.message}
          helperText="Any additional details that might help us serve you better"
        />

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-900 mb-2">What happens next?</h4>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• You'll receive your detailed quote via email within 15 minutes</li>
            <li>• Our team will contact you to confirm delivery details</li>
            <li>• We'll schedule your delivery at your preferred time</li>
            <li>• Your dumpster will be delivered on schedule</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
