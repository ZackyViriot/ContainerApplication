import React from 'react';
import { motion } from 'motion/react';
import { Droplet, Shield, Leaf, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/shared/Button';
import { formatCurrency, formatDimensions } from '../utils/formatters';
import { getContainerById } from '../data/containers';

export const ConcreteWashoutsPage: React.FC = () => {
  const washoutContainer = getContainerById('7-yard-washout');

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
              Washout Containers
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-slate-600"
          >
            EPA-compliant concrete washout solutions for construction sites
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
                alt="Concrete Washout Container"
                className="rounded-2xl shadow-2xl w-full border-2 border-slate-200"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl font-black text-slate-900 mb-4">7-Yard Concrete Washout</h2>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-5xl font-black bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
                  {washoutContainer && formatCurrency(washoutContainer.basePrice)}
                </span>
                <span className="text-slate-600">starting price</span>
              </div>

              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-br from-lime-50 to-emerald-50 rounded-xl p-4 border border-lime-200">
                  <h3 className="font-black text-slate-900 mb-2">Dimensions:</h3>
                  <p className="text-slate-600">
                    {washoutContainer && formatDimensions(
                      washoutContainer.dimensions.length,
                      washoutContainer.dimensions.width,
                      washoutContainer.dimensions.height
                    )}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-lime-50 to-emerald-50 rounded-xl p-4 border border-lime-200">
                  <h3 className="font-black text-slate-900 mb-2">Capacity:</h3>
                  <p className="text-slate-600">
                    Holds approximately 40 mixer truck washouts
                  </p>
                </div>

                <div>
                  <h3 className="font-black text-slate-900 mb-3">Perfect For:</h3>
                  <ul className="space-y-2">
                    {washoutContainer?.bestFor.map((use, index) => (
                      <li key={index} className="flex items-center text-slate-600">
                        <CheckCircle className="h-5 w-5 text-lime-500 mr-3" />
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

      {/* Benefits */}
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
            Why Use Concrete Washout Containers?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'EPA Compliance', description: 'Meet federal and state environmental regulations with proper concrete waste containment and disposal.' },
              { icon: Leaf, title: 'Environmental Protection', description: 'Prevent concrete runoff from contaminating storm drains, waterways, and soil around your job site.' },
              { icon: Droplet, title: 'Site Safety', description: 'Keep your construction site clean and safe by containing concrete wash water in a designated area.' },
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

      {/* How It Works */}
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
            How Concrete Washouts Work
          </motion.h2>

          <div className="space-y-6">
            {[
              { step: 1, title: 'Delivery & Placement', content: 'We deliver the washout container to your site and place it in a convenient, accessible location away from storm drains and waterways.' },
              { step: 2, title: 'Use During Project', content: 'Concrete truck drivers wash out chutes and drums into the washout container. The contained area captures all concrete waste and wash water.' },
              { step: 3, title: 'Monitoring & Maintenance', content: 'Keep the washout container on site for the duration of your concrete work. The 7-yard capacity typically handles about 40 mixer truck washouts.' },
              { step: 4, title: 'Proper Disposal', content: 'When full or when your project is complete, we pick up the container and dispose of the concrete waste at an approved facility in compliance with regulations.' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-lime-300 transition-colors duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-lime-500 to-emerald-500 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 mb-2 text-lg">{item.title}</h3>
                    <p className="text-slate-600">{item.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Info */}
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
            Regulatory Compliance
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl p-8 border-2 border-slate-200"
          >
            <p className="text-slate-600 mb-6">
              The EPA requires proper management of concrete washout on construction sites under the
              Clean Water Act. Our concrete washout containers help you:
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Comply with NPDES construction stormwater permits',
                'Meet SWPPP (Stormwater Pollution Prevention Plan) requirements',
                'Avoid fines and penalties for improper concrete disposal',
                'Demonstrate environmental responsibility to clients and inspectors',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-lime-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gradient-to-br from-lime-50 to-emerald-50 border-2 border-lime-200 rounded-xl p-6">
              <p className="text-sm text-slate-700">
                <strong>Important:</strong> Concrete washout containers must be placed at least 50 feet
                from storm drains, open ditches, streams, or other bodies of water.
              </p>
            </div>
          </motion.div>
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
            Stay{' '}
            <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
              Compliant
            </span>{' '}
            on Your Next Project
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-slate-300 mb-10"
          >
            Order your concrete washout container today
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              to="/quote"
              variant="primary"
              className="group bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-lime-500/30 hover:shadow-2xl transition-all duration-300"
            >
              Get Quote
              <ArrowRight className="ml-2 w-5 h-5 inline group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
