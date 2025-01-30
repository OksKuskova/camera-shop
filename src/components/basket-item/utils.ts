import { TBasketItem } from '../../types/basket-item';

export const getBasketItemById = (basket: TBasketItem[], id: number) => basket.find((item: TBasketItem) => item.id === id);
