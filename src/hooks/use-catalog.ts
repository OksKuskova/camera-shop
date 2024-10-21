import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { RequestStatus } from '../const';
import { getProducts, getPromo, getStatus } from '../slices/catalog/catalog';
import { fetchCatalog } from '../thunk-actions/catalog';
import { fetchPromo } from '../thunk-actions/promo';

export function useCatalog() {
  const dispatch = useAppDispatch();

  const products = useAppSelector(getProducts);
  const promo = useAppSelector(getPromo);
  const requestStatus = useAppSelector(getStatus);

  useEffect(() => {
    if (requestStatus === RequestStatus.Idle) {
      Promise.all([dispatch(fetchCatalog()), dispatch(fetchPromo())]);
    }
  }, [dispatch, requestStatus]);

  return {
    products,
    promo,
    requestStatus,
  };
}
