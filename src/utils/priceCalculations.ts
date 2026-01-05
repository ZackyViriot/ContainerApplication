import type { QuoteFormData, PriceBreakdown, MaterialType, AdditionalService } from '../types/quote.types';
import { getContainerBySize } from '../data/containers';
import { getDeliveryFeeByCity } from '../data/serviceAreas';

const BASE_RENTAL_DAYS = 7;
const EXTENDED_RENTAL_FEE_PER_DAY = 15;
const TAX_RATE = 0.0825; // 8.25%
const COMMERCIAL_PREMIUM_RATE = 0.1; // 10%

const MATERIAL_DISPOSAL_FEES: Record<MaterialType, number> = {
  general_waste: 0,
  construction_debris: 25,
  yard_waste: -15,
  concrete: 50,
  asphalt: 45,
  dirt_fill: 30,
  mixed_materials: 35,
};

const ADDITIONAL_SERVICE_FEES: Record<AdditionalService, number> = {
  same_day_delivery: 75,
  swap_out: 100,
  permit_assistance: 50,
  weekend_delivery: 50,
};

export const calculatePrice = (formData: Partial<QuoteFormData>): PriceBreakdown => {
  // Container price
  const container = formData.containerSize ? getContainerBySize(formData.containerSize) : null;
  const containerPrice = container?.basePrice || 0;

  // Delivery fee
  const city = formData.deliveryAddress?.city || '';
  const deliveryFee = city ? getDeliveryFeeByCity(city) : 0;

  // Disposal fee
  const disposalFee = formData.materialType ? MATERIAL_DISPOSAL_FEES[formData.materialType] : 0;

  // Extended rental fee
  const rentalDays = formData.rentalDuration || BASE_RENTAL_DAYS;
  const extendedDays = Math.max(0, rentalDays - BASE_RENTAL_DAYS);
  const extendedRentalFee = extendedDays * EXTENDED_RENTAL_FEE_PER_DAY;

  // Additional services fees
  const additionalServicesFees: PriceBreakdown['additionalServicesFees'] = {};
  let totalAdditionalServicesFee = 0;

  if (formData.additionalServices) {
    formData.additionalServices.forEach((service) => {
      const fee = ADDITIONAL_SERVICE_FEES[service];
      additionalServicesFees[service] = fee;
      totalAdditionalServicesFee += fee;
    });
  }

  // Calculate subtotal before commercial premium
  const baseSubtotal = containerPrice + deliveryFee + disposalFee + extendedRentalFee + totalAdditionalServicesFee;

  // Commercial premium (10% for commercial projects)
  const isCommercial = formData.projectType === 'commercial' || formData.projectType === 'construction';
  const commercialPremium = isCommercial ? baseSubtotal * COMMERCIAL_PREMIUM_RATE : 0;

  // Final subtotal
  const subtotal = baseSubtotal + commercialPremium;

  // Tax
  const tax = subtotal * TAX_RATE;

  // Total
  const total = subtotal + tax;

  return {
    containerPrice,
    deliveryFee,
    disposalFee,
    extendedRentalFee,
    additionalServicesFees,
    commercialPremium,
    subtotal,
    tax,
    total,
  };
};

export const generateQuoteId = (): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `Q${timestamp}${random}`;
};
