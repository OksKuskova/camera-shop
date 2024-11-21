import { useAppSelector } from '.';
import { getMinPrice, getMaxPrice } from '../slices/filters/filters';
import { Camera } from '../types/camera';
import { useMemo } from 'react';
import { useCategoryTypeLevelFilters } from './use-category-type-level-filters';

export function useFilters(products: Camera[]) {
  const minPrice = useAppSelector(getMinPrice);
  const maxPrice = useAppSelector(getMaxPrice);

  const { productsFilteredByCategoryTypeLevel } = useCategoryTypeLevelFilters(products);

  const filteredProducts = useMemo(() => {
    const getPriceMatchesResult = (product: Camera) => {
      if (minPrice && Number(minPrice) > product.price) {
        return false;
      }
      if (maxPrice && Number(maxPrice) < product.price) {
        return false;
      }
      return true;
    };

    return productsFilteredByCategoryTypeLevel.filter((product) => {
      const isPriceMatches = getPriceMatchesResult(product);

      return isPriceMatches;
    });
  }, [productsFilteredByCategoryTypeLevel, minPrice, maxPrice]);

  return {
    filteredProducts,
  };
}
