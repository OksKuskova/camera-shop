import { Sort } from '../components/form-sort/const';

export type SortTypeKeys = keyof typeof Sort.Type;
export type SortTypeValues = typeof Sort.Type[SortTypeKeys];

export type SortOrderKeys = keyof typeof Sort.Order;
export type SortOrderValues = typeof Sort.Order[SortOrderKeys];

export type SortType = {
  type: SortTypeValues;
  order: SortOrderValues;
};
