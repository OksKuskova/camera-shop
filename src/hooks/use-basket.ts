import { useMemo } from 'react';
import { useAppSelector } from '.';
import { getBasketItems, getCoupon, getDiscount, getStatus } from '../slices/basket/basket';

export function useBasket() {
  const basketItems = useAppSelector(getBasketItems);
  const discount = useAppSelector(getDiscount);
  const coupon = useAppSelector(getCoupon);
  const requestStatus = useAppSelector(getStatus);

  const itemIds = useMemo(() => basketItems.map((item) => item.id), [basketItems]);

  return {
    basketItems,
    discount,
    coupon,
    requestStatus,
    itemIds,
  };
}
