import React from 'react';
import { Home, Search } from 'lucide-react';
import { Section } from '../components/shared/Section';
import { Button } from '../components/shared/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <Section background="slate" padding="xl">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600">
            Sorry, we couldn't find the page you're looking for. It may have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button to="/" variant="primary" size="lg">
            <Home className="mr-2 h-5 w-5" /> Go Home
          </Button>
          <Button to="/dumpster-sizes" variant="secondary" size="lg">
            <Search className="mr-2 h-5 w-5" /> Browse Dumpsters
          </Button>
        </div>

        <div className="bg-white rounded-lg p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Looking for something?</h3>
          <div className="grid grid-cols-2 gap-4 text-left">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Popular Pages:</h4>
              <ul className="space-y-1 text-blue-600">
                <li>
                  <a href="/quote" className="hover:underline">
                    Get Quote
                  </a>
                </li>
                <li>
                  <a href="/dumpster-sizes" className="hover:underline">
                    Dumpster Sizes
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Services:</h4>
              <ul className="space-y-1 text-blue-600">
                <li>
                  <a href="/dumpster-rentals" className="hover:underline">
                    Dumpster Rentals
                  </a>
                </li>
                <li>
                  <a href="/concrete-washouts" className="hover:underline">
                    Concrete Washouts
                  </a>
                </li>
                <li>
                  <a href="/concrete-breakout" className="hover:underline">
                    Concrete Breakout
                  </a>
                </li>
                <li>
                  <a href="/service-areas" className="hover:underline">
                    Service Areas
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
