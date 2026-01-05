import React from 'react';
import { Hammer, Weight, Truck, CheckCircle } from 'lucide-react';
import { Section } from '../components/shared/Section';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { formatCurrency, formatDimensions } from '../utils/formatters';
import { getContainerById } from '../data/containers';

export const ConcreteBreakoutPage: React.FC = () => {
  const breakoutContainer = getContainerById('9-yard-breakout');

  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Concrete Breakout Containers
          </h1>
          <p className="text-xl text-gray-700">
            Heavy-duty containers designed for concrete, asphalt, and masonry disposal
          </p>
        </div>
      </Section>

      {/* Product Details */}
      <Section background="white" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop"
                alt="Concrete Breakout Container"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">9-Yard Concrete Breakout</h2>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-blue-600">
                  {breakoutContainer && formatCurrency(breakoutContainer.basePrice)}
                </span>
                <span className="text-gray-600">starting price</span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Dimensions:</h3>
                  <p className="text-gray-700">
                    {breakoutContainer && formatDimensions(
                      breakoutContainer.dimensions.length,
                      breakoutContainer.dimensions.width,
                      breakoutContainer.dimensions.height
                    )}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Ideal Materials:</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Concrete slabs and foundations
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Sidewalks and driveways
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Asphalt and paving materials
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Brick, block, and masonry
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Perfect For:</h3>
                  <ul className="space-y-1">
                    {breakoutContainer?.bestFor.map((use, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="text-blue-600 mr-2">•</span>
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button to="/quote" variant="primary" size="lg">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section background="slate" padding="xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Our Concrete Breakout Containers?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center" hover>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Weight className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Heavy-Duty Construction</h3>
              <p className="text-gray-600">
                Built specifically to handle the weight and density of concrete, asphalt, and masonry
                materials without damage.
              </p>
            </Card>

            <Card className="text-center" hover>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Truck className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proper Weight Distribution</h3>
              <p className="text-gray-600">
                Lower profile design allows for better weight distribution, making it safer to transport
                heavy concrete materials.
              </p>
            </Card>

            <Card className="text-center" hover>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Hammer className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Demolition Ready</h3>
              <p className="text-gray-600">
                Perfect for demolition projects where you're breaking out concrete foundations, slabs,
                or structures.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Typical Projects */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Typical Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {breakoutContainer?.typicalProjects.map((project, index) => (
              <Card key={index} hover>
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                    <Hammer className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{project}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Weight & Pricing */}
      <Section background="slate" padding="xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Weight Guidelines & Pricing
          </h2>

          <div className="space-y-6">
            <Card>
              <h3 className="font-semibold text-gray-900 mb-3">Understanding Weight Limits</h3>
              <p className="text-gray-700 mb-4">
                Concrete and masonry materials are extremely heavy. A 9-yard container can typically
                hold 5-7 tons of concrete material, but weight limits may vary based on local
                regulations and disposal facility requirements.
              </p>
              <p className="text-gray-700">
                Our team will help you estimate your material weight to ensure you stay within safe and
                legal limits. Overage fees apply for exceeding weight limits.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-gray-900 mb-3">Pricing Structure</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>Base price includes delivery, 7-day rental, and pickup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>Disposal fees for concrete/masonry materials apply ($50)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>Extended rental available at $15/day after first 7 days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>Weight overage fees may apply for loads exceeding limits</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-yellow-50 border border-yellow-200">
              <h3 className="font-semibold text-gray-900 mb-3">Important Reminders</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  <span>Do not mix concrete with other materials (wood, metal, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  <span>Remove rebar and wire mesh when possible to reduce weight</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  <span>Breaking concrete into smaller pieces helps maximize container space</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  <span>Ensure adequate access for our delivery truck</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready for Your Concrete Disposal?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Get your quote for a concrete breakout container today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/quote" variant="primary" size="lg">
              Get Quote
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
