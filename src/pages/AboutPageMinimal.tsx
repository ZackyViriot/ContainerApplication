import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Users, Award, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../components/shared/Button';

export const AboutPageMinimal: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
            className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6"
          >
            About{' '}
            <span className="bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
              Container Rentals
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
          >
            For over 15 years, we've been providing reliable dumpster rental services to residential,
            commercial, and industrial customers throughout the greater San Antonio area.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(132, 204, 22, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132, 204, 22, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Founded in 2008, Container Rentals started with a simple mission: to provide fast,
              reliable, and affordable dumpster rental services to the San Antonio community. What
              began as a small operation with a handful of containers has grown into a full-service
              waste management company serving thousands of customers each year.
            </p>
            <p>
              We understand that every project is unique, whether you're cleaning out a garage,
              renovating your home, managing a construction site, or handling a large commercial
              demolition. That's why we offer a wide range of container sizes and flexible rental
              options to meet your specific needs.
            </p>
            <p>
              Today, with two strategically located yards in Boerne and San Antonio, we're able to
              provide same-day delivery and quick response times throughout the region. Our team of
              experienced professionals is committed to making your waste disposal as easy and
              efficient as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-lime-50/50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(132, 204, 22, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132, 204, 22, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16 text-center">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: 'Reliability', description: 'On-time delivery and pickup, every time. We respect your schedule.', gradient: 'from-lime-500 to-emerald-500' },
              { icon: Users, title: 'Customer Service', description: 'Friendly, knowledgeable staff ready to help you choose the right solution.', gradient: 'from-lime-500 to-emerald-500' },
              { icon: Award, title: 'Quality', description: 'Well-maintained equipment and professional service for every project.', gradient: 'from-lime-500 to-emerald-500' },
              { icon: MapPin, title: 'Local Expertise', description: 'Deep knowledge of San Antonio area regulations and best practices.', gradient: 'from-lime-500 to-emerald-500' },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-10 w-10 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(132, 204, 22, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132, 204, 22, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center">Why Choose Us</h2>

          <div className="space-y-8">
            {[
              {
                title: 'Two Convenient Locations',
                description: 'With yards in both Boerne and San Antonio, we can provide faster service and lower delivery costs to customers throughout the region.'
              },
              {
                title: 'Same-Day Delivery Available',
                description: 'Need a dumpster today? We offer same-day delivery for orders placed before noon, getting your project started without delay.'
              },
              {
                title: 'Upfront, Transparent Pricing',
                description: 'No hidden fees or surprises. We provide clear quotes upfront so you know exactly what to expect.'
              },
              {
                title: 'Expert Guidance',
                description: 'Not sure what size you need? Our experienced team will help you choose the right container for your specific project.'
              },
              {
                title: 'Flexible Rental Periods',
                description: 'Keep the dumpster as long as you need. We offer flexible rental periods and affordable daily rates.'
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 pb-8 border-b border-slate-200 last:border-0">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-lime-500 to-emerald-500 text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-lg">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Ready to{' '}
            <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
              get started?
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Get your free quote today and experience the difference of working with a trusted local partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to="/quote"
              variant="primary"
              className="group bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-lime-500/30 hover:shadow-2xl transition-all duration-300"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5 inline group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              to="/contact"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
