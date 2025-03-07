import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import FormSearch from '../form-search/form-search';
import BasketLink from '../basket-link/basket-link';

function Header(): JSX.Element {
  return (
    <header
      className="header"
      id="header"
      style={{
        width:'100vw',
      }}
    >
      <div className="container">
        <Link className="header__logo" to={AppRoute.Root} aria-label="Переход на главную">
          <svg width="100" height="36" aria-hidden="true">
            <use xlinkHref="#icon-logo"></use>
          </svg>
        </Link>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className="main-nav__link" to={AppRoute.Root}>Каталог</Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to="#">Гарантии</Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to="#">Доставка</Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to="#">О компании</Link>
            </li>
          </ul>
        </nav>
        <FormSearch />
        <BasketLink />
      </div>
    </header>
  );
}

export default Header;
