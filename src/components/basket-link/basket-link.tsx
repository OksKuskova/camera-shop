import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useBasket } from '../../hooks/use-basket';

function BasketLink(): JSX.Element {
  const { basketItemsCount } = useBasket();

  return (
    <Link className="header__basket-link" to={AppRoute.Basket}>
      <svg width="16" height="16" aria-hidden="true">
        <use xlinkHref="#icon-basket"></use>
      </svg>
      {basketItemsCount ? <span className="header__basket-count">{basketItemsCount}</span> : ''}
    </Link>
  );
}

export default BasketLink;
