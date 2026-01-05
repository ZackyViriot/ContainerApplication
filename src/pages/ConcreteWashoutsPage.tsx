import React from 'react';
import { Droplet, Shield, Leaf, CheckCircle } from 'lucide-react';
import { Section } from '../components/shared/Section';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { formatCurrency, formatDimensions } from '../utils/formatters';
import { getContainerById } from '../data/containers';

export const ConcreteWashoutsPage: React.FC = () => {
  const washoutContainer = getContainerById('7-yard-washout');

  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Concrete Washout Containers
          </h1>
          <p className="text-xl text-gray-700">
            EPA-compliant concrete washout solutions for construction sites
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
                alt="Concrete Washout Container"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">7-Yard Concrete Washout</h2>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-blue-600">
                  {washoutContainer && formatCurrency(washoutContainer.basePrice)}
                </span>
                <span className="text-gray-600">starting price</span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Dimensions:</h3>
                  <p className="text-gray-700">
                    {washoutContainer && formatDimensions(
                      washoutContainer.dimensions.length,
                      washoutContainer.dimensions.width,
                      washoutContainer.dimensions.height
                    )}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Capacity:</h3>
                  <p className="text-gray-700">
                    Holds approximately 40 mixer truck washouts
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Perfect For:</h3>
                  <ul className="space-y-1">
                    {washoutContainer?.bestFor.map((use, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
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

      {/* Benefits */}
      <Section background="slate" padding="xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Use Concrete Washout Containers?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center" hover>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Shield className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">EPA Compliance</h3>
              <p className="text-gray-600">
                Meet federal and state environmental regulations with proper concrete waste containment
                and disposal.
              </p>
            </Card>

            <Card className="text-center" hover>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Leaf className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Protection</h3>
              <p className="text-gray-600">
                Prevent concrete runoff from contaminating storm drains, waterways, and soil around
                your job site.
              </p>
            </Card>

            <Card className="text-center" hover>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Droplet className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Site Safety</h3>
              <p className="text-gray-600">
                Keep your construction site clean and safe by containing concrete wash water in a
                designated area.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How Concrete Washouts Work
          </h2>

          <div className="space-y-6">
            <Card>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Delivery & Placement</h3>
                  <p className="text-gray-700">
                    We deliver the washout container to your site and place it in a convenient, accessible
                    location away from storm drains and waterways.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Use During Project</h3>
                  <p className="text-gray-700">
                    Concrete truck drivers wash out chutes and drums into the washout container. The
                    contained area captures all concrete waste and wash water.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Monitoring & Maintenance</h3>
                  <p className="text-gray-700">
                    Keep the washout container on site for the duration of your concrete work. The
                    7-yard capacity typically handles about 40 mixer truck washouts.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Proper Disposal</h3>
                  <p className="text-gray-700">
                    When full or when your project is complete, we pick up the container and dispose of
                    the concrete waste at an approved facility in compliance with regulations.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Compliance Info */}
      <Section background="slate" padding="xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Regulatory Compliance
          </h2>

          <div className="bg-white rounded-lg p-8">
            <p className="text-gray-700 mb-6">
              The EPA requires proper management of concrete washout on construction sites under the
              Clean Water Act. Our concrete washout containers help you:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Comply with NPDES construction stormwater permits
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Meet SWPPP (Stormwater Pollution Prevention Plan) requirements
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Avoid fines and penalties for improper concrete disposal
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Demonstrate environmental responsibility to clients and inspectors
                </span>
              </li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Important:</strong> Concrete washout containers must be placed at least 50 feet
                from storm drains, open ditches, streams, or other bodies of water.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Stay Compliant on Your Next Project
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Order your concrete washout container today
          </p>
          <Button to="/quote" variant="primary" size="lg">
            Get Quote
          </Button>
        </div>
      </Section>
    </>
  );
};
