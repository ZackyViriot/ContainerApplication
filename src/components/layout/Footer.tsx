import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Dumpster Pick-Up', path: '/dumpster-pickup' },
    { name: 'Dumpster Rentals', path: '/dumpster-rentals' },
    { name: 'Dumpster Sizes', path: '/dumpster-sizes' },
    { name: 'Concrete Washouts', path: '/concrete-washouts' },
    { name: 'Concrete Breakout', path: '/concrete-breakout' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceAreas = [
    'San Antonio', 'Boerne', 'New Braunfels',
    'Schertz', 'San Marcos', 'Lockhart',
    'Floresville', 'Pleasanton', 'Hondo', 'Lakehills'
  ];

  return (
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden">
      {/* Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-900/20 via-transparent to-emerald-900/20"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(132, 204, 22, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(132, 204, 22, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative container mx-auto px-4 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <div className="bg-gradient-to-br from-lime-500 to-emerald-500 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black text-white">Container Rentals</span>
                <span className="text-xs text-slate-400">San Antonio & Boerne</span>
              </div>
            </Link>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-lime-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">11580 Hwy 87 E, Adkins, TX 78101</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-lime-400" />
                <a href="tel:8302168260" className="text-sm hover:text-lime-400 transition-colors font-medium">
                  (830) 216-8260
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-lime-400" />
                <a href="mailto:info@containerrentals.com" className="text-sm hover:text-lime-400 transition-colors font-medium">
                  info@containerrentals.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-black text-base mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.slice(0, 6).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-lime-400 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-white font-black text-base mb-4">Services</h3>
            <ul className="space-y-3">
              {quickLinks.slice(6).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-lime-400 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-black text-base mb-4">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-2">
              {serviceAreas.map((city) => (
                <li key={city} className="text-sm text-slate-400">
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-lime-400 transition-colors duration-200" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-lime-400 transition-colors duration-200" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-lime-400 transition-colors duration-200" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-lime-400 transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-slate-400">
              <p>&copy; {currentYear} Container Rentals. All rights reserved.</p>
              <Link to="/privacy" className="hover:text-lime-400 transition-colors duration-200">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
