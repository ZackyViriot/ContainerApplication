import type { ServiceZone } from '../types/container.types';

export const serviceZones: ServiceZone[] = [
  {
    zone: 1,
    zoneName: 'Zone 1',
    cities: ['San Antonio', 'Boerne'],
    deliveryFee: 50,
  },
  {
    zone: 2,
    zoneName: 'Zone 2',
    cities: ['New Braunfels', 'Schertz', 'San Marcos'],
    deliveryFee: 75,
  },
  {
    zone: 3,
    zoneName: 'Zone 3',
    cities: ['Lockhart', 'Floresville', 'Pleasanton'],
    deliveryFee: 100,
  },
  {
    zone: 4,
    zoneName: 'Zone 4',
    cities: ['Hondo', 'Lakehills'],
    deliveryFee: 125,
  },
];

export const counties = [
  'Bexar',
  'Kendall',
  'Comal',
  'Hays',
  'Caldwell',
  'Guadalupe',
  'Wilson',
  'Atascosa',
  'Medina',
  'Bandera',
];

export const getDeliveryFeeByCity = (city: string): number => {
  const zone = serviceZones.find((zone) =>
    zone.cities.some((zoneCity) => zoneCity.toLowerCase() === city.toLowerCase())
  );
  return zone ? zone.deliveryFee : 150; // Default to $150 for other areas
};

export const getZoneByCity = (city: string): ServiceZone | null => {
  const zone = serviceZones.find((zone) =>
    zone.cities.some((zoneCity) => zoneCity.toLowerCase() === city.toLowerCase())
  );
  return zone || null;
};

export const allCities = serviceZones.flatMap((zone) => zone.cities);
