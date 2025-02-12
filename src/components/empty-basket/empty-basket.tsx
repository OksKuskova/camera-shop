import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function EmptyBasket(): JSX.Element {
  return (
    <div className="not-found__container container">
      <h1 className="title title--h3">Ваша корзина пуста.</h1>
      <Link className="btn btn--purple" to={AppRoute.Root}>Перейти в каталог</Link>
    </div>
  );
}

export default EmptyBasket;
