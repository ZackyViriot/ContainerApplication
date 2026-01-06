import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Truck, ChevronDown } from 'lucide-react';
import { Button } from '../shared/Button';

const servicesDropdown = [
  { name: 'Dumpster Rentals', path: '/dumpster-rentals' },
  { name: 'Dumpster Sizes', path: '/dumpster-sizes' },
  { name: 'Dumpster Pick-Up', path: '/dumpster-pickup' },
  { name: 'Concrete Washouts', path: '/concrete-washouts' },
  { name: 'Concrete Breakout', path: '/concrete-breakout' },
];

const mainNavLinks = [
  { name: 'Services', dropdown: servicesDropdown },
  { name: 'Service Areas', path: '/service-areas' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (linkName: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(linkName);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  };

  const isActiveLink = (path?: string, dropdown?: any[]) => {
    if (path) return location.pathname === path;
    if (dropdown) return dropdown.some(item => location.pathname === item.path);
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm'
          : 'bg-white/60 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      {/* Main Navigation */}
      <div className="w-full px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Far Left */}
          <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-lime-500 to-emerald-500 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-6 w-6 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <span className="text-xl font-black text-slate-900 group-hover:text-slate-700 transition-colors">
              Container Rentals
            </span>
          </Link>

          {/* Desktop Navigation - Far Right */}
          <nav className="hidden lg:flex items-center space-x-1">
            {mainNavLinks.map((link) => {
              const hasDropdown = !!link.dropdown;
              const isActive = isActiveLink(link.path, link.dropdown);

              if (hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(link.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`flex items-center space-x-1 px-4 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'text-lime-600 bg-lime-50'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {openDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 py-2 overflow-hidden">
                        {link.dropdown!.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`block px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                              location.pathname === item.path
                                ? 'text-lime-600 bg-lime-50 border-l-4 border-lime-600'
                                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50 border-l-4 border-transparent hover:border-slate-200'
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path!}
                  className={`px-4 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-lime-600 bg-lime-50'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* CTA Button - Inside Nav */}
            <div className="ml-8">
              <Button
                to="/quote"
                variant="primary"
                size="sm"
                className="group bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-lime-500/30 hover:shadow-xl hover:shadow-lime-500/40 transition-all duration-300 hover:scale-105"
              >
                Get Quote
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-lime-50 hover:text-lime-600 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" strokeWidth={2.5} /> : <Menu className="h-6 w-6" strokeWidth={2.5} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-slate-200">
            <nav className="flex flex-col space-y-2">
              {mainNavLinks.map((link) => {
                const hasDropdown = !!link.dropdown;
                const isActive = isActiveLink(link.path, link.dropdown);

                if (hasDropdown) {
                  return (
                    <div key={link.name}>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                        className={`w-full flex items-center justify-between px-5 py-3 text-base font-bold rounded-xl transition-all duration-200 ${
                          isActive
                            ? 'text-lime-600 bg-lime-50'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`h-5 w-5 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} strokeWidth={2.5} />
                      </button>

                      {openDropdown === link.name && (
                        <div className="ml-4 mt-2 space-y-1">
                          {link.dropdown!.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={`block px-5 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
                                location.pathname === item.path
                                  ? 'text-lime-600 bg-lime-50 border-l-4 border-lime-600'
                                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-l-4 border-transparent'
                              }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path!}
                    className={`px-5 py-3 text-base font-bold rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'text-lime-600 bg-lime-50'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-4 mt-4 border-t border-slate-200">
                <Button
                  to="/quote"
                  variant="primary"
                  fullWidth
                  className="bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-lime-500/30 hover:shadow-xl hover:shadow-lime-500/40 transition-all duration-300"
                >
                  Get Free Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
