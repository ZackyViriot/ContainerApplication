import React from 'react';
import { motion } from 'motion/react';
import { Home, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/shared/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 lg:py-40 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-50/60 via-white to-emerald-50/60"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(132, 204, 22, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132, 204, 22, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative max-w-4xl mx-auto text-center px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <h1 className="text-[12rem] md:text-[16rem] font-black bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent leading-none">
              404
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl font-black text-slate-900 mb-4"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-slate-600 mb-10"
          >
            Sorry, we couldn't find the page you're looking for. It may have been moved or deleted.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              to="/"
              variant="primary"
              className="group bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-lime-500/30 hover:shadow-2xl transition-all duration-300"
            >
              <Home className="mr-2 h-5 w-5" /> Go Home
            </Button>
            <Button
              to="/dumpster-sizes"
              variant="outline"
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-xl font-bold transition-all duration-300"
            >
              <Search className="mr-2 h-5 w-5" /> Browse Dumpsters
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl p-8 border-2 border-slate-200"
          >
            <h3 className="text-xl font-black text-slate-900 mb-6">Looking for something?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-bold text-slate-900 mb-3">Popular Pages:</h4>
                <ul className="space-y-2">
                  {[
                    { href: '/quote', label: 'Get Quote' },
                    { href: '/dumpster-sizes', label: 'Dumpster Sizes' },
                    { href: '/about', label: 'About Us' },
                    { href: '/contact', label: 'Contact' },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-lime-600 hover:text-lime-700 hover:underline font-medium transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-3">Services:</h4>
                <ul className="space-y-2">
                  {[
                    { href: '/dumpster-rentals', label: 'Dumpster Rentals' },
                    { href: '/concrete-washouts', label: 'Concrete Washouts' },
                    { href: '/concrete-breakout', label: 'Concrete Breakout' },
                    { href: '/service-areas', label: 'Service Areas' },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-lime-600 hover:text-lime-700 hover:underline font-medium transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
