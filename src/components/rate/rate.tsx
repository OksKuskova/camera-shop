import { Star, rateStars } from './const';

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
  reviewCount: number;
}

function Rate({rating, reviewCount}: RateProps): JSX.Element {
  return (
    <div className="rate product-card__rate">

      {rateStars.map((id, index) => index < rating ? <RateStar key={id} isFull /> : <RateStar key={id} />)}

      <p className="visually-hidden">{`Рейтинг: ${rating}`}</p>
      <p className="rate__count">
        <span className="visually-hidden">Всего оценок:</span>{reviewCount}
      </p>
    </div>
  );
}

export default Rate;
