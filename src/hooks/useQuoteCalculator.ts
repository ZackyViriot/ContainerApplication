import { useState, useEffect } from 'react';
import type { UseFormWatch } from 'react-hook-form';
import type { QuoteFormData, PriceBreakdown } from '../types/quote.types';
import { calculatePrice } from '../utils/priceCalculations';

export const useQuoteCalculator = (watch: UseFormWatch<QuoteFormData>) => {
  const [priceBreakdown, setPriceBreakdown] = useState<PriceBreakdown>(() =>
    calculatePrice({})
  );

  useEffect(() => {
    const subscription = watch((formData) => {
      const breakdown = calculatePrice(formData as Partial<QuoteFormData>);
      setPriceBreakdown(breakdown);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return priceBreakdown;
};
