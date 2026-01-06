import React from 'react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { QuoteFormData } from '../../types/quote.types';
import { Input } from '../shared/Input';
import { Textarea } from '../shared/Textarea';
import { Mail, Phone, CheckCircle, Truck, Calendar } from 'lucide-react';

interface Step6Props {
  register: UseFormRegister<QuoteFormData>;
  errors: FieldErrors<QuoteFormData>;
}

export const Step6CustomerInfo: React.FC<Step6Props> = ({ register, errors }) => {
  return (
    <div>
      <h2 className="text-2xl font-black text-slate-900 mb-2">Your Contact Information</h2>
      <p className="text-slate-600 mb-8">
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

        <div className="bg-gradient-to-br from-lime-50 to-emerald-50 border border-lime-200 rounded-2xl p-6">
          <h4 className="font-black text-slate-900 mb-4 flex items-center gap-2">
            <div className="p-2 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-xl text-white">
              <CheckCircle className="h-5 w-5" />
            </div>
            What happens next?
          </h4>
          <ul className="space-y-3">
            {[
              { icon: Mail, text: "You'll receive your detailed quote via email within 15 minutes" },
              { icon: Phone, text: 'Our team will contact you to confirm delivery details' },
              { icon: Calendar, text: "We'll schedule your delivery at your preferred time" },
              { icon: Truck, text: 'Your dumpster will be delivered on schedule' },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
                <div className="p-1.5 bg-white rounded-lg border border-lime-200 text-lime-600 flex-shrink-0">
                  <item.icon className="h-4 w-4" />
                </div>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
