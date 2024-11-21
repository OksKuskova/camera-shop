import { useAppSelector } from '.';
import { getCategory, getLevels, getTypes } from '../slices/filters/filters';
import { Camera } from '../types/camera';
import { useMemo } from 'react';

export function useCategoryTypeLevelFilters(products: Camera[]) {
  const category = useAppSelector(getCategory);
  const types = useAppSelector(getTypes);
  const levels = useAppSelector(getLevels);

  const productsFilteredByCategoryTypeLevel = useMemo(() => products.filter((product) => {
    const isCategoryMatches = category ? product.category === category : true;
    const isTypesMatches = types.length ? types.includes(product.type) : true;
    const isLevelsMatches = levels.length ? levels.includes(product.level) : true;

    return isCategoryMatches && isTypesMatches && isLevelsMatches;
  }), [products, category, types, levels]);

  return {
    productsFilteredByCategoryTypeLevel,
  };
}

