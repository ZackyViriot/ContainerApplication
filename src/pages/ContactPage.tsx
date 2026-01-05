import React from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Section } from '../components/shared/Section';
import { Card } from '../components/shared/Card';
import { Input } from '../components/shared/Input';
import { Textarea } from '../components/shared/Textarea';
import { Button } from '../components/shared/Button';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactPage: React.FC = () => {
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
    <>
      {/* Hero */}
      <Section background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Get in touch with our team - we're here to help with all your dumpster rental needs
          </p>
        </div>
      </Section>

      {/* Contact Info & Form */}
      <Section background="slate" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get In Touch</h2>

              <div className="space-y-6">
                <Card padding="md">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Address</h3>
                      <p className="text-slate-600 leading-relaxed">
                        11580 Hwy 87 E<br />
                        Adkins, TX 78101
                      </p>
                    </div>
                  </div>
                </Card>

                <Card padding="md">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                      <Phone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Phone</h3>
                      <a
                        href="tel:8302168260"
                        className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
                      >
                        (830) 216-8260
                      </a>
                    </div>
                  </div>
                </Card>

                <Card padding="md">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Email</h3>
                      <a
                        href="mailto:info@containerrentals.com"
                        className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
                      >
                        info@containerrentals.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card padding="md">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                      <Clock className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Business Hours</h3>
                      <div className="text-slate-600 leading-relaxed">
                        <p>Monday - Friday: 7:30 AM - 5:00 PM</p>
                        <p>Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <div className="bg-gray-200 rounded-lg overflow-hidden h-64">
                  <iframe
                    title="Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.123456789!2d-98.2!3d29.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDI0JzAwLjAiTiA5OMKwMTInMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card padding="lg">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Send Us a Message</h2>

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

                  <Button type="submit" variant="primary" fullWidth size="lg">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
