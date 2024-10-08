import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { getReviews } from '../slices/reviews/reviews';
import { fetchReviews } from '../thunk-actions/reviews';
import { Camera } from '../types/camera';
import { sortReviewsByDate } from '../components/review/utils';

export function useReviews(id: Camera['id']) {
  const dispatch = useAppDispatch();

  const reviews = useAppSelector(getReviews);
  const reviewsByDate = sortReviewsByDate(reviews);

  useEffect(() => {
    dispatch(fetchReviews(id));
  }, [dispatch, id]);

  return {
    reviews: reviewsByDate,
  };
}
