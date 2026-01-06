import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Search, ArrowRight } from 'lucide-react';
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
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-50/60 via-white to-emerald-50/60"></div>
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
            className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Service{' '}
            <span className="bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
              Areas
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-slate-600"
          >
            Serving San Antonio, Boerne, and surrounding communities
          </motion.p>
        </div>
      </section>

      {/* City Search */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(132, 204, 22, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132, 204, 22, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative max-w-2xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-lime-300 transition-colors duration-300"
          >
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">
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
                <Button
                  type="submit"
                  variant="primary"
                  className="bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-lime-500/30 transition-all duration-300"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>

              {searchResult && (
                <div className="mt-4 p-4 bg-gradient-to-br from-lime-50 to-emerald-50 border-2 border-lime-200 rounded-xl">
                  <p className="text-slate-700">{searchResult}</p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Service Zones */}
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-16 text-center"
          >
            Delivery Zones & Fees
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {serviceZones.map((zone, index) => (
              <motion.div
                key={zone.zone}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-lime-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900">{zone.zoneName}</h3>
                      <p className="text-sm text-slate-600">Delivery Fee: {formatCurrency(zone.deliveryFee)}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Cities Included:</h4>
                  <div className="flex flex-wrap gap-2">
                    {zone.cities.map((city) => (
                      <span
                        key={city}
                        className="bg-gradient-to-br from-lime-50 to-emerald-50 px-3 py-1 rounded-full text-sm text-slate-700 border border-lime-200"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-br from-lime-50 to-emerald-50 rounded-2xl p-6 border-2 border-lime-200"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 mb-2">Outside These Zones?</h3>
                <p className="text-slate-600 mb-4">
                  We may still be able to serve you! Areas outside our standard zones are quoted at
                  $150 delivery fee, but we're happy to work with you for custom pricing based on your
                  location and needs.
                </p>
                <Button
                  to="/contact"
                  variant="secondary"
                  className="border-2 border-lime-500 text-lime-600 hover:bg-lime-50 px-6 py-3 rounded-xl font-bold transition-all duration-300"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Counties Served */}
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-12 text-center"
          >
            Counties We Serve
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {counties.map((county, index) => (
              <motion.div
                key={county}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white rounded-xl p-4 border-2 border-slate-200 hover:border-lime-300 hover:shadow-lg transition-all duration-300 text-center"
              >
                <p className="font-bold text-slate-900">{county} County</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center text-slate-600 mt-8"
          >
            Serving customers across Central and South Texas
          </motion.p>
        </div>
      </section>

      {/* Two Locations */}
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-16 text-center"
          >
            Our Service Locations
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Main Yard',
                address: '11580 Hwy 87 E\nAdkins, TX 78101',
                description: 'Our main facility serving San Antonio and surrounding areas. Strategically located for quick access to most delivery zones.',
                mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.123456789!2d-98.2!3d29.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDI0JzAwLjAiTiA5OMKwMTInMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890',
              },
              {
                title: 'Boerne Location',
                address: 'Serving Boerne and\nNorthwest San Antonio',
                description: 'Our second yard provides faster service to customers in Boerne, Kendall County, and northwestern areas.',
                mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.123456789!2d-98.7!3d29.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ4JzAwLjAiTiA5OMKwNDInMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890',
              },
            ].map((location, index) => (
              <motion.div
                key={location.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-lime-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">{location.title}</h3>
                    <p className="text-slate-600 whitespace-pre-line">{location.address}</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">{location.description}</p>
                <div className="bg-slate-100 rounded-xl h-48 overflow-hidden">
                  <iframe
                    title={`${location.title} Location`}
                    src={location.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </motion.div>
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-6"
          >
            Ready to{' '}
            <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
              Get Started?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-slate-300 mb-10"
          >
            Whether you're in our core service area or beyond, we're here to help
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              to="/quote"
              variant="primary"
              className="group bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-lime-500/30 hover:shadow-2xl transition-all duration-300"
            >
              Get Quote
              <ArrowRight className="ml-2 w-5 h-5 inline group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              to="/contact"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-all duration-300"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
