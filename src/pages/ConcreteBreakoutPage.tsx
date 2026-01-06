import React from 'react';
import { motion } from 'motion/react';
import { Hammer, Weight, Truck, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/shared/Button';
import { formatCurrency, formatDimensions } from '../utils/formatters';
import { getContainerById } from '../data/containers';

export const ConcreteBreakoutPage: React.FC = () => {
  const breakoutContainer = getContainerById('9-yard-breakout');

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
            Concrete{' '}
            <span className="bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
              Breakout Containers
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-slate-600"
          >
            Heavy-duty containers designed for concrete, asphalt, and masonry disposal
          </motion.p>
        </div>
      </section>

      {/* Product Details */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(132, 204, 22, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132, 204, 22, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop"
                alt="Concrete Breakout Container"
                className="rounded-2xl shadow-2xl w-full border-2 border-slate-200"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl font-black text-slate-900 mb-4">9-Yard Concrete Breakout</h2>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-5xl font-black bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
                  {breakoutContainer && formatCurrency(breakoutContainer.basePrice)}
                </span>
                <span className="text-slate-600">starting price</span>
              </div>

              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-br from-lime-50 to-emerald-50 rounded-xl p-4 border border-lime-200">
                  <h3 className="font-black text-slate-900 mb-2">Dimensions:</h3>
                  <p className="text-slate-600">
                    {breakoutContainer && formatDimensions(
                      breakoutContainer.dimensions.length,
                      breakoutContainer.dimensions.width,
                      breakoutContainer.dimensions.height
                    )}
                  </p>
                </div>

                <div>
                  <h3 className="font-black text-slate-900 mb-3">Ideal Materials:</h3>
                  <ul className="space-y-2">
                    {[
                      'Concrete slabs and foundations',
                      'Sidewalks and driveways',
                      'Asphalt and paving materials',
                      'Brick, block, and masonry',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-slate-600">
                        <CheckCircle className="h-5 w-5 text-lime-500 mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-black text-slate-900 mb-3">Perfect For:</h3>
                  <ul className="space-y-2">
                    {breakoutContainer?.bestFor.map((use, index) => (
                      <li key={index} className="flex items-center text-slate-600">
                        <span className="text-lime-500 mr-3">•</span>
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button
                to="/quote"
                variant="primary"
                className="group bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-lime-500/30 hover:shadow-2xl transition-all duration-300"
              >
                Get Quote
                <ArrowRight className="ml-2 w-5 h-5 inline group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
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
            Why Choose Our Concrete Breakout Containers?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Weight, title: 'Heavy-Duty Construction', description: 'Built specifically to handle the weight and density of concrete, asphalt, and masonry materials without damage.' },
              { icon: Truck, title: 'Proper Weight Distribution', description: 'Lower profile design allows for better weight distribution, making it safer to transport heavy concrete materials.' },
              { icon: Hammer, title: 'Demolition Ready', description: 'Perfect for demolition projects where you\'re breaking out concrete foundations, slabs, or structures.' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-lime-300 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-10 w-10 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Typical Projects */}
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
            Typical Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {breakoutContainer?.typicalProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-lime-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Hammer className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-black text-slate-900">{project}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weight & Pricing */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-lime-50/50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(132, 204, 22, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132, 204, 22, 0.06) 1px, transparent 1px)
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
            Weight Guidelines & Pricing
          </motion.h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl p-6 border-2 border-slate-200"
            >
              <h3 className="font-black text-slate-900 mb-3">Understanding Weight Limits</h3>
              <p className="text-slate-600 mb-4">
                Concrete and masonry materials are extremely heavy. A 9-yard container can typically
                hold 5-7 tons of concrete material, but weight limits may vary based on local
                regulations and disposal facility requirements.
              </p>
              <p className="text-slate-600">
                Our team will help you estimate your material weight to ensure you stay within safe and
                legal limits. Overage fees apply for exceeding weight limits.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl p-6 border-2 border-slate-200"
            >
              <h3 className="font-black text-slate-900 mb-3">Pricing Structure</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-lime-500 mr-3 font-bold">•</span>
                  <span>Base price includes delivery, 7-day rental, and pickup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-500 mr-3 font-bold">•</span>
                  <span>Disposal fees for concrete/masonry materials apply ($50)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-500 mr-3 font-bold">•</span>
                  <span>Extended rental available at $15/day after first 7 days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-500 mr-3 font-bold">•</span>
                  <span>Weight overage fees may apply for loads exceeding limits</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="bg-gradient-to-br from-lime-50 to-emerald-50 rounded-2xl p-6 border-2 border-lime-200"
            >
              <h3 className="font-black text-slate-900 mb-3">Important Reminders</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-lime-500 mr-3 font-bold">•</span>
                  <span>Do not mix concrete with other materials (wood, metal, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-500 mr-3 font-bold">•</span>
                  <span>Remove rebar and wire mesh when possible to reduce weight</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-500 mr-3 font-bold">•</span>
                  <span>Breaking concrete into smaller pieces helps maximize container space</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-500 mr-3 font-bold">•</span>
                  <span>Ensure adequate access for our delivery truck</span>
                </li>
              </ul>
            </motion.div>
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
            Ready for Your{' '}
            <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
              Concrete Disposal?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-slate-300 mb-10"
          >
            Get your quote for a concrete breakout container today
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
