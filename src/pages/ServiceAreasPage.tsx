import React, { useState } from 'react';
import { MapPin, Search } from 'lucide-react';
import { Section } from '../components/shared/Section';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { Input } from '../components/shared/Input';
import { serviceZones, counties } from '../data/serviceAreas';
import { formatCurrency } from '../utils/formatters';

export const ServiceAreasPage: React.FC = () => {
  const [searchCity, setSearchCity] = useState('');
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchCity.trim()) return;

    const zone = serviceZones.find((z) =>
      z.cities.some((city) => city.toLowerCase() === searchCity.toLowerCase())
    );

    if (zone) {
      setSearchResult(
        `${searchCity} is in ${zone.zoneName} - Delivery fee: ${formatCurrency(zone.deliveryFee)}`
      );
    } else {
      setSearchResult(
        `${searchCity} may be outside our standard service zones. Contact us for custom pricing.`
      );
    }
  };

  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Service Areas
          </h1>
          <p className="text-xl text-gray-700">
            Serving San Antonio, Boerne, and surrounding communities
          </p>
        </div>
      </Section>

      {/* City Search */}
      <Section background="white" padding="xl">
        <div className="max-w-2xl mx-auto">
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Check If We Serve Your Area
            </h2>

            <form onSubmit={handleSearch} className="space-y-4">
              <div className="flex gap-4">
                <Input
                  placeholder="Enter your city name"
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  className="flex-grow"
                />
                <Button type="submit" variant="primary">
                  <Search className="h-5 w-5" />
                </Button>
              </div>

              {searchResult && (
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-gray-700">{searchResult}</p>
                </div>
              )}
            </form>
          </Card>
        </div>
      </Section>

      {/* Service Zones */}
      <Section background="slate" padding="xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Delivery Zones & Fees
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {serviceZones.map((zone) => (
              <Card key={zone.zone} hover>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{zone.zoneName}</h3>
                      <p className="text-sm text-gray-600">Delivery Fee: {formatCurrency(zone.deliveryFee)}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cities Included:</h4>
                  <div className="flex flex-wrap gap-2">
                    {zone.cities.map((city) => (
                      <span
                        key={city}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="bg-blue-50 border border-blue-200">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Outside These Zones?</h3>
                <p className="text-gray-700 mb-3">
                  We may still be able to serve you! Areas outside our standard zones are quoted at
                  $150 delivery fee, but we're happy to work with you for custom pricing based on your
                  location and needs.
                </p>
                <Button to="/contact" variant="secondary">
                  Contact Us
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Counties Served */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Counties We Serve
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {counties.map((county) => (
              <Card key={county} className="text-center" padding="sm" hover>
                <p className="font-semibold text-gray-900">{county} County</p>
              </Card>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8">
            Serving customers across Central and South Texas
          </p>
        </div>
      </Section>

      {/* Two Locations */}
      <Section background="slate" padding="xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Service Locations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card hover>
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Main Yard</h3>
                  <p className="text-gray-700">
                    11580 Hwy 87 E<br />
                    Adkins, TX 78101
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Our main facility serving San Antonio and surrounding areas. Strategically located for
                quick access to most delivery zones.
              </p>
              <div className="bg-gray-100 rounded-lg h-48">
                <iframe
                  title="Main Yard Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.123456789!2d-98.2!3d29.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDI0JzAwLjAiTiA5OMKwMTInMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </Card>

            <Card hover>
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Boerne Location</h3>
                  <p className="text-gray-700">
                    Serving Boerne and<br />
                    Northwest San Antonio
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Our second yard provides faster service to customers in Boerne, Kendall County, and
                northwestern areas.
              </p>
              <div className="bg-gray-100 rounded-lg h-48">
                <iframe
                  title="Boerne Yard Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.123456789!2d-98.7!3d29.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ4JzAwLjAiTiA5OMKwNDInMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Whether you're in our core service area or beyond, we're here to help
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
