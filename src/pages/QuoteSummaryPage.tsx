import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Download, Mail, Phone } from 'lucide-react';
import type { QuoteSummary } from '../types/quote.types';
import { Section } from '../components/shared/Section';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { formatCurrency, formatDate } from '../utils/formatters';
import { getContainerBySize } from '../data/containers';

export const QuoteSummaryPage: React.FC = () => {
  const [quote, setQuote] = useState<QuoteSummary | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedQuote = localStorage.getItem('quote-summary');
    if (savedQuote) {
      setQuote(JSON.parse(savedQuote));
    } else {
      navigate('/quote');
    }
  }, [navigate]);

  if (!quote) {
    return null;
  }

  const container = getContainerBySize(quote.containerSize);

  return (
    <Section background="slate" padding="xl">
      <div className="max-w-4xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Quote Generated Successfully!</h1>
          <p className="text-xl text-gray-600">
            We've sent a detailed quote to {quote.customerInfo.email}
          </p>
        </div>

        {/* Quote ID */}
        <Card className="mb-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Quote ID</p>
            <p className="text-2xl font-bold text-blue-600">{quote.quoteId}</p>
            <p className="text-sm text-gray-500 mt-1">
              Generated on {formatDate(quote.timestamp.split('T')[0])}
            </p>
          </div>
        </Card>

        {/* Quote Details */}
        <Card className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quote Details</h2>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 pb-4 border-b">
              <div>
                <p className="text-sm text-gray-600">Project Type</p>
                <p className="font-semibold text-gray-900 capitalize">
                  {quote.projectType.replace(/_/g, ' ')}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Container Size</p>
                <p className="font-semibold text-gray-900">{container?.name}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pb-4 border-b">
              <div>
                <p className="text-sm text-gray-600">Rental Duration</p>
                <p className="font-semibold text-gray-900">{quote.rentalDuration} days</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Material Type</p>
                <p className="font-semibold text-gray-900 capitalize">
                  {quote.materialType.replace(/_/g, ' ')}
                </p>
              </div>
            </div>

            <div className="pb-4 border-b">
              <p className="text-sm text-gray-600 mb-1">Delivery Address</p>
              <p className="font-semibold text-gray-900">
                {quote.deliveryAddress.street}
                <br />
                {quote.deliveryAddress.city}, {quote.deliveryAddress.state}{' '}
                {quote.deliveryAddress.zipCode}
              </p>
            </div>

            <div className="pb-4 border-b">
              <p className="text-sm text-gray-600 mb-1">Delivery Details</p>
              <p className="font-semibold text-gray-900">
                {formatDate(quote.deliveryDate)} - {quote.deliveryTime}
              </p>
            </div>

            {quote.additionalServices.length > 0 && (
              <div>
                <p className="text-sm text-gray-600 mb-2">Additional Services</p>
                <ul className="space-y-1">
                  {quote.additionalServices.map((service) => (
                    <li key={service} className="flex items-center text-gray-900">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="capitalize">{service.replace(/_/g, ' ')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Card>

        {/* Price Breakdown */}
        <Card className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Price Breakdown</h2>

          <div className="space-y-3 mb-4">
            <div className="flex justify-between text-gray-700">
              <span>Container ({container?.name}):</span>
              <span className="font-semibold">{formatCurrency(quote.priceBreakdown.containerPrice)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Delivery Fee:</span>
              <span className="font-semibold">{formatCurrency(quote.priceBreakdown.deliveryFee)}</span>
            </div>
            {quote.priceBreakdown.disposalFee !== 0 && (
              <div className="flex justify-between text-gray-700">
                <span>Disposal Fee:</span>
                <span className="font-semibold">{formatCurrency(quote.priceBreakdown.disposalFee)}</span>
              </div>
            )}
            {quote.priceBreakdown.extendedRentalFee > 0 && (
              <div className="flex justify-between text-gray-700">
                <span>Extended Rental:</span>
                <span className="font-semibold">{formatCurrency(quote.priceBreakdown.extendedRentalFee)}</span>
              </div>
            )}
            {quote.priceBreakdown.commercialPremium > 0 && (
              <div className="flex justify-between text-gray-700">
                <span>Commercial Premium:</span>
                <span className="font-semibold">{formatCurrency(quote.priceBreakdown.commercialPremium)}</span>
              </div>
            )}
          </div>

          <div className="border-t pt-4 mb-4">
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Subtotal:</span>
              <span className="font-semibold">{formatCurrency(quote.priceBreakdown.subtotal)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Tax (8.25%):</span>
              <span className="font-semibold">{formatCurrency(quote.priceBreakdown.tax)}</span>
            </div>
          </div>

          <div className="border-t pt-4 bg-blue-50 -mx-6 -mb-6 px-6 py-4 rounded-b-lg">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-gray-900">TOTAL:</span>
              <span className="text-3xl font-bold text-blue-600">
                {formatCurrency(quote.priceBreakdown.total)}
              </span>
            </div>
          </div>
        </Card>

        {/* Next Steps */}
        <Card className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                1
              </span>
              <span className="text-gray-700">
                Check your email at <strong>{quote.customerInfo.email}</strong> for a detailed quote
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                2
              </span>
              <span className="text-gray-700">
                Our team will contact you at <strong>{quote.customerInfo.phone}</strong> within 1 business hour
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                3
              </span>
              <span className="text-gray-700">
                We'll confirm all details and schedule your delivery
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                4
              </span>
              <span className="text-gray-700">
                Your dumpster will be delivered on schedule!
              </span>
            </li>
          </ol>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" fullWidth onClick={() => window.print()}>
            <Download className="mr-2 h-5 w-5" /> Download Quote
          </Button>
          <Button variant="secondary" fullWidth href="mailto:info@containerrentals.com">
            <Mail className="mr-2 h-5 w-5" /> Email Us
          </Button>
          <Button variant="outline" fullWidth href="tel:8302168260">
            <Phone className="mr-2 h-5 w-5" /> Call Us
          </Button>
        </div>
      </div>
    </Section>
  );
};
