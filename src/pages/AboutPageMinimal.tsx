import React from 'react';
import { MapPin, Users, Award, Clock } from 'lucide-react';
import { Button } from '../components/shared/Button';

export const AboutPageMinimal: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            About Container Rentals
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            For over 15 years, we've been providing reliable dumpster rental services to residential,
            commercial, and industrial customers throughout the greater San Antonio area.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Our Story</h2>
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
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-lg mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Reliability</h3>
              <p className="text-slate-600 leading-relaxed">
                On-time delivery and pickup, every time. We respect your schedule.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-lg mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Customer Service</h3>
              <p className="text-slate-600 leading-relaxed">
                Friendly, knowledgeable staff ready to help you choose the right solution.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-lg mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Quality</h3>
              <p className="text-slate-600 leading-relaxed">
                Well-maintained equipment and professional service for every project.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-lg mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Local Expertise</h3>
              <p className="text-slate-600 leading-relaxed">
                Deep knowledge of San Antonio area regulations and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Why Choose Us</h2>

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
              <div key={index} className="flex items-start space-x-4 pb-8 border-b border-slate-100 last:border-0">
                <div className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Get your free quote today and experience the difference of working with a trusted local partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/quote" variant="primary" className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg font-medium">
              Get Free Quote
            </Button>
            <Button to="/contact" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-medium">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
