import { ClassName, DateFormat } from '../../const';
import { Review } from '../../types/review';
import { humanizeDate } from '../../utils';
import Rate from '../rate/rate';

function ReviewCard({ userName, createAt, rating, advantage, disadvantage, review }: Review): JSX.Element {
  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{userName}</p>
        <time className="review-card__data" dateTime={humanizeDate(createAt, DateFormat.YearMonthDay)}>{humanizeDate(createAt, DateFormat.DayMonth)}</time>
      </div>
      <Rate rating={rating} className={ClassName.Review} />
      <ul className="review-card__list">
        <li className="item-list"><span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{advantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{disadvantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">{review}</p>
        </li>
      </ul>
    </li>
  );
}

export default ReviewCard;
