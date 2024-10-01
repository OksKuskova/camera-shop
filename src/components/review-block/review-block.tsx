import { Review } from '../../types/review';
import ReviewCard from '../review-card/review-card';

type ReviewBlockProps = {
  reviews: Review[];
}

function ReviewBlock({ reviews }: ReviewBlockProps): JSX.Element {
  return (
    <ul className="review-block__list">
      {reviews.map((review) => <ReviewCard key={review.id} userReview={review} />)}
    </ul>
  );
}

export default ReviewBlock;
