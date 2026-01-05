import type { ContainerSize } from './container.types';

export type { ContainerSize } from './container.types';

export type ProjectType = 'residential' | 'commercial' | 'construction' | 'demolition' | 'junk_removal' | 'concrete_work';

export type MaterialType = 'general_waste' | 'construction_debris' | 'yard_waste' | 'concrete' | 'asphalt' | 'dirt_fill' | 'mixed_materials';

export type AdditionalService = 'same_day_delivery' | 'swap_out' | 'permit_assistance' | 'weekend_delivery';

export interface QuoteFormData {
  // Step 1: Project Type
  projectType: ProjectType;

  // Step 2: Container Selection
  containerSize: ContainerSize;

  // Step 3: Rental Details
  rentalDuration: number; // in days
  deliveryDate: string;
  deliveryTime: string;
  deliveryAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  placementLocation: string;

  // Step 4: Material Type
  materialType: MaterialType;

  // Step 5: Additional Services
  additionalServices: AdditionalService[];

  // Step 6: Customer Information
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company?: string;
    projectDescription?: string;
  };
}

export interface PriceBreakdown {
  containerPrice: number;
  deliveryFee: number;
  disposalFee: number;
  extendedRentalFee: number;
  additionalServicesFees: {
    [key in AdditionalService]?: number;
  };
  commercialPremium: number;
  subtotal: number;
  tax: number;
  total: number;
}

export interface QuoteSummary extends QuoteFormData {
  quoteId: string;
  timestamp: string;
  priceBreakdown: PriceBreakdown;
}

export interface QuoteStep {
  step: number;
  title: string;
  description: string;
}
