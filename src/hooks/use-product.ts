import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { RequestStatus } from '../const';
import { getCurrentProductInfo, getStatus } from '../slices/product/product';
import { getReviews } from '../slices/reviews/reviews';
import { fetchProduct } from '../thunk-actions/product';
import { fetchReviews } from '../thunk-actions/reviews';
import { Camera } from '../types/camera';

export function useProduct(id: Camera['id']) {
  const dispatch = useAppDispatch();

  const currentProduct = useAppSelector(getCurrentProductInfo);
  const requestStatus = useAppSelector(getStatus);
  const reviews = useAppSelector(getReviews);

  useEffect(() => {
    Promise.all([dispatch(fetchProduct(id)), dispatch(fetchReviews(id))]);
  }, [dispatch, id]);

  return {
    currentProduct,
    reviews,
    isRequestFailed: requestStatus === RequestStatus.Failed,
  };
}
