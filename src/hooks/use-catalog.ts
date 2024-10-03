import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { getProducts, getStatus } from '../slices/catalog/catalog';
import { RequestStatus } from '../const';
import { fetchCatalog } from '../thunk-actions/catalog';

export function useCatalog() {
  const dispatch = useAppDispatch();

  const products = useAppSelector(getProducts);
  const requestStatus = useAppSelector(getStatus);

  useEffect(() => {
    if (requestStatus === RequestStatus.Idle) {
      dispatch(fetchCatalog());
    }
  });

  return {
    products,
  };
}
