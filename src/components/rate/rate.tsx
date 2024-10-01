import { Star, rateStars } from './const';
import { ClassName } from '../../const';

type RateStarProps = {
  isFull?: boolean;
}

function RateStar({isFull}: RateStarProps): JSX.Element {
  return (
    <svg width="17" height="16" aria-hidden="true">
      <use xlinkHref={isFull ? Star.Full : Star.Empty}></use>
    </svg>
  );
}

type RateProps = {
  rating: number;
  reviewCount?: number;
  className: ClassName;
}

function Rate({rating, reviewCount, className}: RateProps): JSX.Element {

  const isReview = className === ClassName.Review;

  return (
    <div className={`rate ${className}__rate`}>

      {rateStars.map((id, index) => index < rating ? <RateStar key={id} isFull /> : <RateStar key={id} />)}

      <p className="visually-hidden">{`${isReview ? 'Оценка' : 'Рейтинг'}: ${rating}`}</p>

      {
        isReview ? '' : (
          <p className="rate__count">
            <span className="visually-hidden">Всего оценок:</span>{reviewCount}
          </p>
        )
      }
    </div>
  );
}

export default Rate;
