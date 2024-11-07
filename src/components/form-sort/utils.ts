import { SortType } from '../../types/sort';
import { Camera } from '../../types/camera';
import { Sort } from '../../const';

const { Type, Order } = Sort;

export const sortProducts = (sort: SortType, products: Camera[]) => {
  const { type, order } = sort;
  const sortingType = type === Type.POPULAR ? Type.POPULAR : Type.PRICE;

  return [...products].slice().sort((leftProduct, rightProduct) => {
    const leftValue = leftProduct[sortingType];
    const rightValue = rightProduct[sortingType];

    if (order === Order.DESCENDING) {
      return rightValue - leftValue;
    }
    return leftValue - rightValue;
  });
};
