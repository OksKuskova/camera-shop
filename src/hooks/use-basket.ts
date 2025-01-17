import { BasketItem } from '../types/basket-item';

export function useBasket() {
  const basketData = localStorage.getItem('basket');
  const basket: BasketItem[] = basketData ? JSON.parse(basketData) as BasketItem[] : [];

  return {
    basket
  };
}
