import React from 'react';
import { useForm } from 'react-hook-form';
import { Clock, CheckCircle, Phone } from 'lucide-react';
import { Section } from '../components/shared/Section';
import { Card } from '../components/shared/Card';
import { Input } from '../components/shared/Input';
import { Textarea } from '../components/shared/Textarea';
import { Button } from '../components/shared/Button';

interface PickupFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  containerType: string;
  pickupDate: string;
  notes: string;
}

export const DumpsterPickUpPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PickupFormData>();

  const onSubmit = (data: PickupFormData) => {
    console.log('Pickup request submitted:', data);
    alert('Thank you! We will contact you shortly to confirm your pickup.');
    reset();
  };

  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dumpster Pick-Up Service
          </h1>
          <p className="text-xl text-gray-700">
            Fast, reliable pick-up when you're ready - same-day service available
          </p>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How Pick-Up Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center" hover>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Phone className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Request Pick-Up</h3>
              <p className="text-gray-600">
                Call us or fill out the form below when your dumpster is ready for pick-up.
              </p>
            </Card>

            <Card className="text-center" hover>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Clock className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Schedule Time</h3>
              <p className="text-gray-600">
                We'll confirm your pick-up time. Same-day service available for morning requests.
              </p>
            </Card>

            <Card className="text-center" hover>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <CheckCircle className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. We Pick Up</h3>
              <p className="text-gray-600">
                Our team arrives on schedule to safely remove your dumpster.
              </p>
            </Card>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-3">Same-Day Pick-Up Available!</h3>
            <p className="text-green-800">
              Request pick-up before noon and we'll remove your dumpster the same day. Perfect for
              projects with tight deadlines or when you finish ahead of schedule.
            </p>
          </div>
        </div>
      </Section>

      {/* Pick-Up Request Form */}
      <Section background="slate" padding="xl">
        <div className="max-w-2xl mx-auto">
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Pick-Up</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                label="Name"
                placeholder="Your name"
                {...register('name', { required: 'Name is required' })}
                error={errors.name?.message}
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="tel"
                  label="Phone"
                  placeholder="(830) 216-8260"
                  {...register('phone', { required: 'Phone is required' })}
                  error={errors.phone?.message}
                  required
                />

                <Input
                  type="email"
                  label="Email"
                  placeholder="your.email@example.com"
                  {...register('email', { required: 'Email is required' })}
                  error={errors.email?.message}
                  required
                />
              </div>

              <Input
                label="Pick-Up Address"
                placeholder="Where is the dumpster located?"
                {...register('address', { required: 'Address is required' })}
                error={errors.address?.message}
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Container Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register('containerType', { required: 'Please select container type' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select...</option>
                    <option value="10-yard">10-Yard Dumpster</option>
                    <option value="15-yard">15-Yard Dumpster</option>
                    <option value="20-yard">20-Yard Dumpster</option>
                    <option value="30-yard">30-Yard Dumpster</option>
                    <option value="40-yard">40-Yard Dumpster</option>
                    <option value="washout">Concrete Washout</option>
                    <option value="breakout">Concrete Breakout</option>
                  </select>
                  {errors.containerType && (
                    <p className="mt-1 text-sm text-red-500">{errors.containerType.message}</p>
                  )}
                </div>

                <Input
                  type="date"
                  label="Preferred Pick-Up Date"
                  {...register('pickupDate', { required: 'Pick-up date is required' })}
                  error={errors.pickupDate?.message}
                  required
                />
              </div>

              <Textarea
                label="Additional Notes"
                placeholder="Any special instructions or details we should know?"
                rows={4}
                {...register('notes')}
                error={errors.notes?.message}
              />

              <Button type="submit" variant="primary" fullWidth size="lg">
                Request Pick-Up
              </Button>
            </form>
          </Card>
        </div>
      </Section>

      {/* Contact Info */}
      <Section background="white" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need Immediate Pick-Up?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Call us directly for same-day service
          </p>
          <Button href="tel:8302168260" variant="primary" size="lg">
            <Phone className="mr-2 h-5 w-5" /> Call (830) 216-8260
          </Button>
        </div>
      </Section>
    </>
  );
};
