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
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">Container Rentals</span>
                <span className="text-xs text-slate-400">San Antonio & Boerne</span>
              </div>
            </Link>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">11580 Hwy 87 E, Adkins, TX 78101</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-400" />
                <a href="tel:8302168260" className="text-sm hover:text-white transition-colors font-medium">
                  (830) 216-8260
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-400" />
                <a href="mailto:info@containerrentals.com" className="text-sm hover:text-white transition-colors font-medium">
                  info@containerrentals.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.slice(0, 6).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-indigo-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Services</h3>
            <ul className="space-y-3">
              {quickLinks.slice(6).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-indigo-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Service Areas</h3>
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
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-slate-400">
              <p>&copy; {currentYear} Container Rentals. All rights reserved.</p>
              <Link to="/privacy" className="hover:text-indigo-400 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
