import { useCallback, useEffect, useState } from 'react';
import { useReviews } from '../../../hooks/use-reviews';
import { Camera } from '../../../types/camera';
import { ShownReview } from '../const';
import ReviewList from '../review-list/review-list';

type ReviewBlockProps = {
  productId: Camera['id'];
}

function ReviewBlock({ productId }: ReviewBlockProps): JSX.Element {
  const [shownReviewsCount, setShownReviewsCount] = useState(ShownReview.DefaultCount);

  const { reviews } = useReviews(Number(productId));

  const hasMoreReviews = useCallback(() => shownReviewsCount < reviews.length, [shownReviewsCount, reviews]);

  const handleButtonClick = () => {
    setShownReviewsCount(shownReviewsCount + ShownReview.Step);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && hasMoreReviews()) {
        setShownReviewsCount(shownReviewsCount + ShownReview.Step);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [shownReviewsCount, hasMoreReviews]);

  return (
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
        </div>
        <ReviewList reviews={reviews.slice(0, shownReviewsCount)}/>
        <div className="review-block__buttons" style={!hasMoreReviews() ? {display: 'none'} : {}}>
          <button className="btn btn--purple" type="button" onClick={handleButtonClick}>Показать больше отзывов</button>
        </div>
      </div>
    </section>
  );
}

export default ReviewBlock;
