import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { getProducts, getStatus } from '../slices/products/products';
import { RequestStatus } from '../const';
import { fetchProducts } from '../thunk-actions/products';

export function useProducts() {
  const dispatch = useAppDispatch();

  const products = useAppSelector(getProducts);
  const requestStatus = useAppSelector(getStatus);

  useEffect(() => {
    if (requestStatus === RequestStatus.Idle) {
      dispatch(fetchProducts());
    }
  });

  return {
    products,
  };
}
