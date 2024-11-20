import { SortOrderValues, SortType } from '../../types/sort';
import { Camera } from '../../types/camera';
import { Sort } from './const';
import { SortTypeValues } from '../../types/sort';

const { Type, Order } = Sort;

export const sortProducts = (sort: SortType, products: Camera[]) => {
  const { type, order } = sort;

  return products.slice().sort((leftProduct, rightProduct) => {
    const leftValue = leftProduct[type];
    const rightValue = rightProduct[type];

    if (order === Order.DESCENDING) {
      return rightValue - leftValue;
    }
    return leftValue - rightValue;
  });
};

export const getSortingTypeLabel = (value: SortTypeValues) => {
  switch(value) {
    case Type.PRICE: return 'по цене';
    case Type.POPULAR: return 'по популярности';
  }
};

export const getSortingOrderLabel = (value: SortOrderValues) => {
  switch(value) {
    case Order.ASCENDING: return 'По возрастанию';
    case Order.DESCENDING: return 'По убыванию';
  }
};

