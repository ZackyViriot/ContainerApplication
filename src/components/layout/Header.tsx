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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white border-b border-slate-200'
          : 'bg-white border-b border-transparent'
      }`}
    >
      {/* Main Navigation */}
      <div className="w-full px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Far Left */}
          <Link to="/" className="flex items-center space-x-2.5 group flex-shrink-0">
            <Truck className="h-6 w-6 text-slate-900" />
            <span className="text-lg font-semibold text-slate-900">Container Rentals</span>
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
                      className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-slate-900'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {openDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 py-1 overflow-hidden">
                        {link.dropdown!.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              location.pathname === item.path
                                ? 'text-slate-900 bg-slate-50'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
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
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-slate-900'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* CTA Button - Inside Nav */}
            <div className="ml-6">
              <Button to="/quote" variant="primary" size="sm" className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium">
                Get Quote
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-1">
              {mainNavLinks.map((link) => {
                const hasDropdown = !!link.dropdown;
                const isActive = isActiveLink(link.path, link.dropdown);

                if (hasDropdown) {
                  return (
                    <div key={link.name}>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                          isActive
                            ? 'text-emerald-700 bg-emerald-50'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>

                      {openDropdown === link.name && (
                        <div className="ml-4 mt-1 space-y-1">
                          {link.dropdown!.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                                location.pathname === item.path
                                  ? 'text-emerald-700 bg-emerald-50'
                                  : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
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
                    className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                      isActive
                        ? 'text-emerald-700 bg-emerald-50'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-4 mt-4 border-t border-slate-200">
                <Button to="/quote" variant="primary" fullWidth>
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
