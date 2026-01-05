import React from 'react';
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
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg text-slate-600">
            Get in touch with our team - we're here to help with all your dumpster rental needs
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-12">Get in touch</h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Address</h3>
                    <p className="text-slate-600">
                      11580 Hwy 87 E<br />
                      Adkins, TX 78101
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
                    <a
                      href="tel:8302168260"
                      className="text-slate-900 hover:text-slate-700 font-medium"
                    >
                      (830) 216-8260
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                    <a
                      href="mailto:info@containerrentals.com"
                      className="text-slate-900 hover:text-slate-700 font-medium"
                    >
                      info@containerrentals.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Business Hours</h3>
                    <div className="text-slate-600">
                      <p>Monday - Friday: 7:30 AM - 5:00 PM</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white border border-slate-200 rounded-xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>

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

                  <Button type="submit" variant="primary" fullWidth className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-4 rounded-lg font-medium">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
