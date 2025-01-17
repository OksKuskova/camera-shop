import { ChangeQuantityAction, Quantity } from './const';
import { BasketItem } from '../../types/basket-item';

export const getItemInBasketById = (basket: BasketItem[], itemId: number) => basket.find((item: BasketItem) => item.id === itemId);

const increaseQuantity = (item: BasketItem, quantity: number) => {
  if (item.quantity < Quantity.Max) {
    item.quantity += quantity;
  }
};

const saveBasket = (basket: BasketItem[]) => {
  localStorage.setItem('basket', JSON.stringify(basket));
};

export const addToBasket = (basket: BasketItem[], itemId: number, quantity = Quantity.Step) => {
  const matchedItem = getItemInBasketById(basket, itemId);

  if (matchedItem) {
    increaseQuantity(matchedItem, quantity);
  } else {
    basket.push({
      id: itemId,
      quantity: quantity,
    });
  }

  saveBasket(basket);
};

export const removeFromBasket = (basket: BasketItem[], itemId: number) => {
  const updatedBasket = basket.filter((item) => item.id !== itemId);
  saveBasket(updatedBasket);
};

export const changeQuantity = (basket: BasketItem[], itemId: number, action: ChangeQuantityAction, quantity = Quantity.Step) => {
  const currentItem = getItemInBasketById(basket, itemId);

  if (currentItem) {
    switch (action) {
      case ChangeQuantityAction.Increase:
        increaseQuantity(currentItem, quantity);
        break;

      case ChangeQuantityAction.Reduce:
        if (currentItem.quantity > Quantity.Min) {
          currentItem.quantity -= quantity;
        }
        break;

      case ChangeQuantityAction.Set:
        if (quantity === 0) {
          currentItem.quantity = Quantity.Min;
          break;
        }
        currentItem.quantity = quantity;
        break;
    }
  }

  saveBasket(basket);
};
