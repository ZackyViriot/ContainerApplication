import { useEffect } from 'react';
import type { UseFormWatch, UseFormSetValue } from 'react-hook-form';
import type { QuoteFormData } from '../types/quote.types';

const STORAGE_KEY = 'quote-form-data';

export const useFormPersistence = (
  watch: UseFormWatch<QuoteFormData>,
  setValue: UseFormSetValue<QuoteFormData>
) => {
  // Load form data from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved) as Partial<QuoteFormData>;
        // Set each field individually to avoid overwriting the entire form
        Object.entries(data).forEach(([key, value]) => {
          if (value !== undefined) {
            setValue(key as keyof QuoteFormData, value as any);
          }
        });
      }
    } catch (error) {
      console.error('Error loading form data:', error);
    }
  }, [setValue]);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    const subscription = watch((value) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
      } catch (error) {
        console.error('Error saving form data:', error);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const clearFormData = () => {
    localStorage.removeItem(STORAGE_KEY);
  };

  return { clearFormData };
};
