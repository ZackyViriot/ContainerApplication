import React from 'react';
import { Section } from '../components/shared/Section';
import { ContainerCard } from '../components/shared/ContainerCard';
import { containers } from '../data/containers';
import { Button } from '../components/shared/Button';

export const DumpsterSizesPage: React.FC = () => {
  const standardContainers = containers.filter((c) => !c.size.includes('washout') && !c.size.includes('breakout'));

  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dumpster Sizes & Pricing
          </h1>
          <p className="text-xl text-gray-700">
            Choose from our wide range of dumpster sizes to match your project needs
          </p>
        </div>
      </Section>

      {/* Size Comparison */}
      <Section background="white" padding="xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Find Your Perfect Size
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {standardContainers.map((container) => (
              <ContainerCard key={container.id} container={container} />
            ))}
          </div>

          {/* Size Selection Guide */}
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Not Sure Which Size You Need?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Choose a 10-15 Yard if you have:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Small bathroom or kitchen remodel</li>
                  <li>• Garage or basement cleanout</li>
                  <li>• Small deck or shed removal</li>
                  <li>• Estate or attic cleanout</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Choose a 20-30 Yard if you have:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Roof replacement or major renovation</li>
                  <li>• Large deck or patio removal</li>
                  <li>• Multi-room remodel</li>
                  <li>• Whole house cleanout</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Choose a 40 Yard if you have:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Commercial construction project</li>
                  <li>• Large demolition job</li>
                  <li>• New home construction</li>
                  <li>• Major commercial renovation</li>
                </ul>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-700 mb-4">Still not sure?</p>
                  <Button to="/contact" variant="secondary">
                    Talk to an Expert
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing Info */}
      <Section background="slate" padding="xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Transparent Pricing
          </h2>

          <div className="space-y-4 text-gray-700">
            <p className="text-lg">
              Our pricing includes delivery, pickup, and 7 days of rental. Additional days are just
              $15/day. We also offer competitive disposal fees based on your material type.
            </p>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">What's Included:</h3>
              <ul className="space-y-2">
                <li>✓ Delivery to your location</li>
                <li>✓ 7 days of rental time</li>
                <li>✓ Pickup when you're done</li>
                <li>✓ Responsible disposal</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Additional Fees May Apply:</h3>
              <ul className="space-y-2">
                <li>• Extended rental beyond 7 days: $15/day</li>
                <li>• Disposal fees vary by material type</li>
                <li>• Delivery fees vary by zone</li>
                <li>• Overage fees for exceeding weight limits</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button to="/quote" variant="primary" size="lg">
              Get Instant Quote
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};
