import React from 'react';
import type { PriceBreakdown as PriceBreakdownType } from '../../types/quote.types';
import { formatCurrency } from '../../utils/formatters';
import { Card } from '../shared/Card';

interface PriceBreakdownProps {
  breakdown: PriceBreakdownType;
  deliveryZone?: number;
}

export const PriceBreakdown: React.FC<PriceBreakdownProps> = ({ breakdown, deliveryZone }) => {
  const hasAdditionalServices = Object.keys(breakdown.additionalServicesFees).length > 0;

  return (
    <Card className="sticky top-24">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Price Breakdown</h3>

      <div className="space-y-3 mb-4">
        {breakdown.containerPrice > 0 && (
          <div className="flex justify-between text-gray-700">
            <span>Container:</span>
            <span className="font-semibold">{formatCurrency(breakdown.containerPrice)}</span>
          </div>
        )}

        {breakdown.deliveryFee > 0 && (
          <div className="flex justify-between text-gray-700">
            <span>Delivery {deliveryZone ? `(Zone ${deliveryZone})` : ''}:</span>
            <span className="font-semibold">{formatCurrency(breakdown.deliveryFee)}</span>
          </div>
        )}

        {breakdown.disposalFee !== 0 && (
          <div className="flex justify-between text-gray-700">
            <span>Disposal Fee:</span>
            <span className={`font-semibold ${breakdown.disposalFee < 0 ? 'text-green-600' : ''}`}>
              {breakdown.disposalFee > 0 ? '+' : ''}
              {formatCurrency(breakdown.disposalFee)}
            </span>
          </div>
        )}

        {breakdown.extendedRentalFee > 0 && (
          <div className="flex justify-between text-gray-700">
            <span>Extended Rental:</span>
            <span className="font-semibold">{formatCurrency(breakdown.extendedRentalFee)}</span>
          </div>
        )}

        {hasAdditionalServices && (
          <div className="border-t pt-3">
            <div className="font-semibold text-gray-700 mb-2">Additional Services:</div>
            {Object.entries(breakdown.additionalServicesFees).map(([service, fee]) => (
              <div key={service} className="flex justify-between text-sm text-gray-600 ml-4">
                <span className="capitalize">{service.replace(/_/g, ' ')}</span>
                <span>{formatCurrency(fee)}</span>
              </div>
            ))}
          </div>
        )}

        {breakdown.commercialPremium > 0 && (
          <div className="flex justify-between text-gray-700">
            <span>Commercial Premium (10%):</span>
            <span className="font-semibold">{formatCurrency(breakdown.commercialPremium)}</span>
          </div>
        )}
      </div>

      <div className="border-t pt-4 mb-4">
        <div className="flex justify-between text-gray-700 mb-2">
          <span>Subtotal:</span>
          <span className="font-semibold">{formatCurrency(breakdown.subtotal)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Tax (8.25%):</span>
          <span className="font-semibold">{formatCurrency(breakdown.tax)}</span>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">TOTAL:</span>
          <span className="text-2xl font-bold text-blue-600">{formatCurrency(breakdown.total)}</span>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>Note:</strong> Base rental includes 7 days. Final pricing subject to verification and site conditions.
        </p>
      </div>
    </Card>
  );
};
