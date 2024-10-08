import { useState } from 'react';
import { useReviews } from '../../../hooks/use-reviews';
import { Camera } from '../../../types/camera';
import { ShownReviews } from '../const';
import ReviewList from '../review-list/review-list';

type ReviewBlockProps = {
  productId: Camera['id'];
}

function ReviewBlock({ productId }: ReviewBlockProps): JSX.Element {
  const [shownReviewsNumber, setShownReviewsNumber] = useState<number>(ShownReviews.Default);

  const handleButtonClick = () => {
    setShownReviewsNumber(shownReviewsNumber + ShownReviews.Step);
  };

  const { reviews } = useReviews(Number(productId));

  const allReviewsShown = shownReviewsNumber >= reviews.length;

  return (
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
          {/* <button className="btn" type="button">Оставить свой отзыв</button> */}
        </div>
        <ReviewList reviews={reviews.slice(0, shownReviewsNumber)}/>
        <div className="review-block__buttons" style={allReviewsShown ? {display: 'none'} : {}}>
          <button className="btn btn--purple" type="button" onClick={handleButtonClick}>Показать больше отзывов</button>
        </div>
      </div>
    </section>
  );
}

export default ReviewBlock;
