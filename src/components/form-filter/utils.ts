import { Camera } from '../../types/camera';
import { PriceRange } from './const';

export const calculatePriceRange = (products: Camera[]): { minPrice: number | null; maxPrice: number | null } => {
  if (!products || products.length === 0) {
    return { minPrice: null, maxPrice: null };
  }

  let minPrice: number | null = null;
  let maxPrice: number | null = null;

  products.forEach((product) => {
    if (minPrice === null || product.price < minPrice) {
      minPrice = product.price;
    }
    if (maxPrice === null || product.price > maxPrice) {
      maxPrice = product.price;
    }
  });

  return { minPrice, maxPrice };
};

export const getPriceRangeLabel = (value: string) => {
  switch(value) {
    case PriceRange.MIN: return 'от';
    case PriceRange.MAX: return 'до';
  }
};

export const getPriceRangePlaceholder = (range: string, minPriceValue: number | null, maxPriceValue: number | null) => {
  if (range === PriceRange.MIN) {
    return minPriceValue !== null ? String(minPriceValue) : getPriceRangeLabel(PriceRange.MIN);
  } else {
    return maxPriceValue !== null ? String(maxPriceValue) : getPriceRangeLabel(PriceRange.MAX);
  }
};
