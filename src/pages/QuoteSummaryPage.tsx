import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle, Download, Mail, Phone } from 'lucide-react';
import type { QuoteSummary } from '../types/quote.types';
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
    <div className="min-h-screen">
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-50/60 via-white to-emerald-50/60"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(132, 204, 22, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132, 204, 22, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative max-w-4xl mx-auto px-6 md:px-8">
          {/* Success Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-10"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-lime-500 to-emerald-500 rounded-full p-5 shadow-lg shadow-lime-500/30">
                <CheckCircle className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Quote Generated{' '}
              <span className="bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
                Successfully!
              </span>
            </h1>
            <p className="text-lg text-slate-600">
              We've sent a detailed quote to {quote.customerInfo.email}
            </p>
          </motion.div>

          {/* Quote ID */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl border-2 border-slate-200 p-6 mb-6 hover:border-lime-300 transition-colors duration-300"
          >
            <div className="text-center">
              <p className="text-sm text-slate-600 mb-1">Quote ID</p>
              <p className="text-2xl font-black bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">{quote.quoteId}</p>
              <p className="text-sm text-slate-500 mt-1">
                Generated on {formatDate(quote.timestamp.split('T')[0])}
              </p>
            </div>
          </motion.div>

          {/* Quote Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl border-2 border-slate-200 p-6 mb-6 hover:border-lime-300 transition-colors duration-300"
          >
            <h2 className="text-2xl font-black text-slate-900 mb-6">Quote Details</h2>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-200">
                <div>
                  <p className="text-sm text-slate-600">Project Type</p>
                  <p className="font-bold text-slate-900 capitalize">
                    {quote.projectType.replace(/_/g, ' ')}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Container Size</p>
                  <p className="font-bold text-slate-900">{container?.name}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-200">
                <div>
                  <p className="text-sm text-slate-600">Rental Duration</p>
                  <p className="font-bold text-slate-900">{quote.rentalDuration} days</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Material Type</p>
                  <p className="font-bold text-slate-900 capitalize">
                    {quote.materialType.replace(/_/g, ' ')}
                  </p>
                </div>
              </div>

              <div className="pb-4 border-b border-slate-200">
                <p className="text-sm text-slate-600 mb-1">Delivery Address</p>
                <p className="font-bold text-slate-900">
                  {quote.deliveryAddress.street}
                  <br />
                  {quote.deliveryAddress.city}, {quote.deliveryAddress.state}{' '}
                  {quote.deliveryAddress.zipCode}
                </p>
              </div>

              <div className="pb-4 border-b border-slate-200">
                <p className="text-sm text-slate-600 mb-1">Delivery Details</p>
                <p className="font-bold text-slate-900">
                  {formatDate(quote.deliveryDate)} - {quote.deliveryTime}
                </p>
              </div>

              {quote.additionalServices.length > 0 && (
                <div>
                  <p className="text-sm text-slate-600 mb-2">Additional Services</p>
                  <ul className="space-y-1">
                    {quote.additionalServices.map((service) => (
                      <li key={service} className="flex items-center text-slate-900">
                        <CheckCircle className="h-4 w-4 text-lime-600 mr-2" />
                        <span className="capitalize">{service.replace(/_/g, ' ')}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>

          {/* Price Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl border-2 border-slate-200 p-6 mb-6 hover:border-lime-300 transition-colors duration-300"
          >
            <h2 className="text-2xl font-black text-slate-900 mb-6">Price Breakdown</h2>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-slate-700">
                <span>Container ({container?.name}):</span>
                <span className="font-bold">{formatCurrency(quote.priceBreakdown.containerPrice)}</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>Delivery Fee:</span>
                <span className="font-bold">{formatCurrency(quote.priceBreakdown.deliveryFee)}</span>
              </div>
              {quote.priceBreakdown.disposalFee !== 0 && (
                <div className="flex justify-between text-slate-700">
                  <span>Disposal Fee:</span>
                  <span className="font-bold">{formatCurrency(quote.priceBreakdown.disposalFee)}</span>
                </div>
              )}
              {quote.priceBreakdown.extendedRentalFee > 0 && (
                <div className="flex justify-between text-slate-700">
                  <span>Extended Rental:</span>
                  <span className="font-bold">{formatCurrency(quote.priceBreakdown.extendedRentalFee)}</span>
                </div>
              )}
              {quote.priceBreakdown.commercialPremium > 0 && (
                <div className="flex justify-between text-slate-700">
                  <span>Commercial Premium:</span>
                  <span className="font-bold">{formatCurrency(quote.priceBreakdown.commercialPremium)}</span>
                </div>
              )}
            </div>

            <div className="border-t border-slate-200 pt-4 mb-4">
              <div className="flex justify-between text-slate-700 mb-2">
                <span>Subtotal:</span>
                <span className="font-bold">{formatCurrency(quote.priceBreakdown.subtotal)}</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>Tax (8.25%):</span>
                <span className="font-bold">{formatCurrency(quote.priceBreakdown.tax)}</span>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4 bg-gradient-to-br from-lime-50 to-emerald-50 -mx-6 -mb-6 px-6 py-4 rounded-b-2xl">
              <div className="flex justify-between items-center">
                <span className="text-xl font-black text-slate-900">TOTAL:</span>
                <span className="text-3xl font-black bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
                  {formatCurrency(quote.priceBreakdown.total)}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl border-2 border-slate-200 p-6 mb-6 hover:border-lime-300 transition-colors duration-300"
          >
            <h2 className="text-2xl font-black text-slate-900 mb-4">What Happens Next?</h2>
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-lime-500 to-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 shadow-lg shadow-lime-500/30">
                  1
                </span>
                <span className="text-slate-700">
                  Check your email at <strong className="text-slate-900">{quote.customerInfo.email}</strong> for a detailed quote
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-lime-500 to-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 shadow-lg shadow-lime-500/30">
                  2
                </span>
                <span className="text-slate-700">
                  Our team will contact you at <strong className="text-slate-900">{quote.customerInfo.phone}</strong> within 1 business hour
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-lime-500 to-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 shadow-lg shadow-lime-500/30">
                  3
                </span>
                <span className="text-slate-700">
                  We'll confirm all details and schedule your delivery
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-lime-500 to-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 shadow-lg shadow-lime-500/30">
                  4
                </span>
                <span className="text-slate-700">
                  Your dumpster will be delivered on schedule!
                </span>
              </li>
            </ol>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="primary" fullWidth onClick={() => window.print()}>
              <Download className="mr-2 h-5 w-5" /> Download Quote
            </Button>
            <Button variant="secondary" fullWidth href="mailto:info@containerrentals.com">
              <Mail className="mr-2 h-5 w-5" /> Email Us
            </Button>
            <Button variant="outline" fullWidth href="tel:8302168260">
              <Phone className="mr-2 h-5 w-5" /> Call Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
