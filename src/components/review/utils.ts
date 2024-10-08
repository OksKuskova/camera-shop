import dayjs from 'dayjs';
import { Review } from '../../types/review';

export const sortReviewsByDate = (reviews: Review[]) => {
  if (reviews.length > 1) {
    return [...reviews].sort((leftReview, rightReview) => dayjs(rightReview.createAt).diff(dayjs(leftReview.createAt)));
  }
  return reviews;
};
