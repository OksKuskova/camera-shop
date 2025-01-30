export const QUANTITY_REGEX = /^[1-9]?$/;

export const Quantity = {
  Step: 1,
  Max: 9,
  Min: 1,
};

export enum ChangeQuantityAction {
  Reduce = 'reduce',
  Increase = 'increase',
}
