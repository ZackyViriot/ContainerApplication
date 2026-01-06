import React from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Clock, CheckCircle, Phone } from 'lucide-react';
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
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-50/60 via-white to-emerald-50/60"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(132, 204, 22, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132, 204, 22, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative max-w-4xl mx-auto text-center px-6 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Dumpster{' '}
            <span className="bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
              Pick-Up Service
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-slate-600"
          >
            Fast, reliable pick-up when you're ready - same-day service available
          </motion.p>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(132, 204, 22, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132, 204, 22, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-16 text-center"
          >
            How Pick-Up Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Phone, title: '1. Request Pick-Up', description: 'Call us or fill out the form below when your dumpster is ready for pick-up.' },
              { icon: Clock, title: '2. Schedule Time', description: 'We\'ll confirm your pick-up time. Same-day service available for morning requests.' },
              { icon: CheckCircle, title: '3. We Pick Up', description: 'Our team arrives on schedule to safely remove your dumpster.' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-lime-300 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-10 w-10 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-br from-lime-50 to-emerald-50 rounded-2xl p-8 border-2 border-lime-200"
          >
            <h3 className="font-black text-slate-900 mb-3">Same-Day Pick-Up Available!</h3>
            <p className="text-slate-600">
              Request pick-up before noon and we'll remove your dumpster the same day. Perfect for
              projects with tight deadlines or when you finish ahead of schedule.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pick-Up Request Form */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-lime-50/50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(132, 204, 22, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132, 204, 22, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative max-w-2xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl p-8 md:p-10 border-2 border-slate-200 hover:border-lime-300 transition-colors duration-300"
          >
            <h2 className="text-2xl font-black text-slate-900 mb-6">Request Pick-Up</h2>

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
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Container Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register('containerType', { required: 'Please select container type' })}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-colors"
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

              <Button
                type="submit"
                variant="primary"
                fullWidth
                className="bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-lime-500/30 hover:shadow-xl transition-all duration-300"
              >
                Request Pick-Up
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-900/30 via-transparent to-emerald-900/30"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(132, 204, 22, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132, 204, 22, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative max-w-3xl mx-auto text-center px-6 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-6"
          >
            Need{' '}
            <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
              Immediate Pick-Up?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-slate-300 mb-10"
          >
            Call us directly for same-day service
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              href="tel:8302168260"
              variant="primary"
              className="group bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-lime-500/30 hover:shadow-2xl transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" /> Call (830) 216-8260
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
