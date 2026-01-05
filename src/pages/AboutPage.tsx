import React from 'react';
import { MapPin, Users, Award, Clock } from 'lucide-react';
import { Section } from '../components/shared/Section';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';

export const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Container Rentals
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            For over 15 years, we've been providing reliable dumpster rental services to residential,
            commercial, and industrial customers throughout the greater San Antonio area.
          </p>
        </div>
      </Section>

      {/* Our Story */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
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
      </Section>

      {/* Our Values */}
      <Section background="slate" padding="xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center" hover>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Clock className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reliability</h3>
              <p className="text-gray-600">
                On-time delivery and pickup, every time. We respect your schedule and keep our promises.
              </p>
            </Card>

            <Card className="text-center" hover>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Service</h3>
              <p className="text-gray-600">
                Friendly, knowledgeable staff ready to help you choose the right solution for your needs.
              </p>
            </Card>

            <Card className="text-center" hover>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Award className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">
                Well-maintained equipment and professional service you can count on for every project.
              </p>
            </Card>

            <Card className="text-center" hover>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <MapPin className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of San Antonio area regulations, permits, and best practices.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Two Convenient Locations</h3>
                <p className="text-gray-700">
                  With yards in both Boerne and San Antonio, we can provide faster service and lower
                  delivery costs to customers throughout the region.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Same-Day Delivery Available</h3>
                <p className="text-gray-700">
                  Need a dumpster today? We offer same-day delivery for orders placed before noon,
                  getting your project started without delay.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Upfront, Transparent Pricing</h3>
                <p className="text-gray-700">
                  No hidden fees or surprises. We provide clear quotes upfront so you know exactly
                  what to expect.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                <p className="text-gray-700">
                  Not sure what size you need? Our experienced team will help you choose the right
                  container for your specific project and materials.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Rental Periods</h3>
                <p className="text-gray-700">
                  Keep the dumpster as long as you need. We offer flexible rental periods and
                  affordable daily rates for extended use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Get your free quote today and experience the difference of working with a trusted local partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/quote" variant="primary" size="lg">
              Get Free Quote
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};
