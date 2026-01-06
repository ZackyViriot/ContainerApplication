import React from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Input } from '../components/shared/Input';
import { Textarea } from '../components/shared/Textarea';
import { Button } from '../components/shared/Button';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactPageMinimal: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    alert('Thank you for contacting us! We will get back to you shortly.');
    reset();
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        {/* Green Tint Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-lime-50/60 via-white to-emerald-50/60"></div>

        {/* Grid Pattern */}
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
            className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-4 tracking-tight"
          >
            Contact{' '}
            <span className="bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
              Us
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-slate-600"
          >
            Get in touch with our team - we're here to help with all your dumpster rental needs
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl font-black text-slate-900 mb-12">Get in touch</h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <MapPin className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 mb-2">Address</h3>
                    <p className="text-slate-600">
                      11580 Hwy 87 E<br />
                      Adkins, TX 78101
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Phone className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 mb-2">Phone</h3>
                    <a
                      href="tel:8302168260"
                      className="text-slate-900 hover:text-lime-600 font-medium transition-colors"
                    >
                      (830) 216-8260
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Mail className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 mb-2">Email</h3>
                    <a
                      href="mailto:info@containerrentals.com"
                      className="text-slate-900 hover:text-lime-600 font-medium transition-colors"
                    >
                      info@containerrentals.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Clock className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 mb-2">Business Hours</h3>
                    <div className="text-slate-600">
                      <p>Monday - Friday: 7:30 AM - 5:00 PM</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 md:p-10 hover:border-lime-300 transition-colors duration-300">
                <h2 className="text-2xl font-black text-slate-900 mb-6">Send us a message</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <Input
                    label="Name"
                    placeholder="Your full name"
                    {...register('name', { required: 'Name is required' })}
                    error={errors.name?.message}
                    required
                  />

                  <Input
                    type="email"
                    label="Email"
                    placeholder="your.email@example.com"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    error={errors.email?.message}
                    required
                  />

                  <Input
                    type="tel"
                    label="Phone"
                    placeholder="(830) 216-8260"
                    {...register('phone', { required: 'Phone number is required' })}
                    error={errors.phone?.message}
                    required
                  />

                  <Textarea
                    label="Message"
                    placeholder="How can we help you?"
                    rows={6}
                    {...register('message', { required: 'Message is required' })}
                    error={errors.message?.message}
                    required
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    className="bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-lime-500/30 hover:shadow-xl transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
