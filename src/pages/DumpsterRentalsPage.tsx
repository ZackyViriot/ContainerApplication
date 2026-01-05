import React from 'react';
import { Home, Building2, Recycle, HardHat, Wrench } from 'lucide-react';
import { Section } from '../components/shared/Section';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';

const rentalTypes = [
  {
    icon: HardHat,
    title: 'Construction Dumpster Rental',
    description: 'Perfect for new construction, renovations, and remodeling projects. Handle all types of construction debris including wood, drywall, roofing materials, and more.',
    uses: ['New construction', 'Major renovations', 'Roofing projects', 'Demolition work'],
  },
  {
    icon: Home,
    title: 'Residential Dumpster Rental',
    description: 'Ideal for home cleanouts, garage organization, and residential projects. From spring cleaning to estate cleanouts, we have the right size for your needs.',
    uses: ['Home cleanouts', 'Garage organization', 'Estate sales', 'Moving/downsizing'],
  },
  {
    icon: Building2,
    title: 'Roll-Off Dumpster Rental',
    description: 'Our roll-off dumpsters are delivered on specialized trucks and can be placed conveniently on your property. Available in multiple sizes for any project scope.',
    uses: ['Commercial projects', 'Large renovations', 'Long-term rentals', 'Industrial use'],
  },
  {
    icon: Recycle,
    title: 'Recycling Dumpster Rental',
    description: 'Dedicated containers for recyclable materials. Help the environment while keeping your project organized and compliant with local regulations.',
    uses: ['Metal recycling', 'Wood recycling', 'Cardboard/paper', 'Construction materials'],
  },
  {
    icon: Wrench,
    title: 'Specialty Dumpster Rental',
    description: 'Including concrete washouts and breakout containers designed for specific materials. Perfect for concrete contractors and specialized construction needs.',
    uses: ['Concrete washout', 'Concrete disposal', 'Heavy materials', 'Specialty waste'],
  },
];

export const DumpsterRentalsPage: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dumpster Rental Services
          </h1>
          <p className="text-xl text-gray-700">
            Professional waste management solutions for residential, commercial, and industrial projects
          </p>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How Our Rental Process Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Choose Your Size', 'Schedule Delivery', 'Fill It Up', 'We Pick It Up'].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step}</h3>
                <p className="text-sm text-gray-600">
                  {index === 0 && 'Select the perfect container size for your project'}
                  {index === 1 && 'Pick your delivery date and time'}
                  {index === 2 && 'Load your waste at your own pace'}
                  {index === 3 && "Call when ready and we'll haul it away"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Rental Types */}
      <Section background="slate" padding="xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Types of Dumpster Rentals
          </h2>

          <div className="space-y-8">
            {rentalTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Card key={type.title} hover>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-100 p-4 rounded-lg">
                        <Icon className="h-12 w-12 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                      <p className="text-gray-700 mb-4">{type.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Perfect For:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {type.uses.map((use, index) => (
                            <div key={index} className="flex items-center text-gray-600">
                              <span className="text-orange-500 mr-2">•</span>
                              {use}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 flex items-center">
                      <Button to="/quote" variant="primary">
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Rental Terms */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Rental Terms & Conditions
          </h2>

          <div className="space-y-6">
            <Card>
              <h3 className="font-semibold text-gray-900 mb-3">Rental Period</h3>
              <p className="text-gray-700">
                Our standard rental includes 7 days. Need more time? No problem! Additional days are
                just $15/day. We offer flexible rental periods to match your project timeline.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-gray-900 mb-3">Weight Limits</h3>
              <p className="text-gray-700">
                Each container size has a weight limit included in the base price. Overage fees apply
                for exceeding the limit. We'll help you estimate your waste weight to avoid surprises.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-gray-900 mb-3">Prohibited Items</h3>
              <p className="text-gray-700">
                Hazardous materials, chemicals, paint, tires, and batteries are not accepted. Contact
                us if you have questions about specific materials.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-gray-900 mb-3">Delivery & Placement</h3>
              <p className="text-gray-700">
                We'll work with you to find the perfect spot for your dumpster. Make sure there's
                adequate space and clearance for our delivery truck. Permits may be required for
                street placement.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Rent Your Dumpster?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Get an instant quote and schedule your delivery today.
          </p>
          <Button to="/quote" variant="primary" size="lg">
            Get Free Quote
          </Button>
        </div>
      </Section>
    </>
  );
};
