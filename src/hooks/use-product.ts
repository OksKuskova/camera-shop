import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { RequestStatus } from '../const';
import { getCurrentProductInfo, getStatus } from '../slices/product/product';
import { fetchProduct } from '../thunk-actions/product';
import { Camera } from '../types/camera';

export function useProduct(id: Camera['id']) {
  const dispatch = useAppDispatch();

  const currentProduct = useAppSelector(getCurrentProductInfo);
  const requestStatus = useAppSelector(getStatus);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  return {
    currentProduct,
    isLoading: requestStatus === RequestStatus.Loading,
    isRequestFailed: requestStatus === RequestStatus.Failed,
  };
}
