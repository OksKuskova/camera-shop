import { Link, Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useModal } from '../../hooks/use-modal';
import UpButton from '../up-button/up-button';
import Modal from '../modal/modal';
import Header from '../header/header';
import SliderPromo from '../slider-promo/slider-promo';

function Layout(): JSX.Element {
  const { isActive, modalContentValue } = useModal();
  const { pathname } = useLocation();

  return (
    <div className="wrapper">
      <Header />

      <main
        style={{
          width:'100vw',
        }}
      >
        {pathname === AppRoute.Root && <SliderPromo />}

        <div className="page-content">

          <Outlet />

        </div>

        {isActive && <Modal modalContentValue={modalContentValue} />}

      </main>

      <UpButton />

      <footer className="footer">
        <div className="container">
          <div className="footer__info">
            <Link className="footer__logo" to="index.html" aria-label="Переход на главную">
              <svg width="100" height="36" aria-hidden="true">
                <use xlinkHref="#icon-logo-mono"></use>
              </svg>
            </Link>
            <p className="footer__description">Интернет-магазин фото- и видеотехники</p>
            <ul className="social">
              <li className="social__item">
                <Link className="link" to="#" aria-label="Переход на страницу вконтатке">
                  <svg width="20" height="20" aria-hidden="true">
                    <use xlinkHref="#icon-vk"></use>
                  </svg>
                </Link>
              </li>
              <li className="social__item">
                <Link className="link" to="#" aria-label="Переход на страницу pinterest">
                  <svg width="20" height="20" aria-hidden="true">
                    <use xlinkHref="#icon-pinterest"></use>
                  </svg>
                </Link>
              </li>
              <li className="social__item">
                <Link className="link" to="#" aria-label="Переход на страницу reddit">
                  <svg width="20" height="20" aria-hidden="true">
                    <use xlinkHref="#icon-reddit"></use>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <ul className="footer__nav">
            <li className="footer__nav-item">
              <p className="footer__title">Навигация</p>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link className="link" to={AppRoute.Root}>Каталог
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="link" to="#">Гарантии
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="link" to="#">Доставка
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="link" to="#">О компании
                  </Link>
                </li>
              </ul>
            </li>
            <li className="footer__nav-item">
              <p className="footer__title">Ресурсы</p>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link className="link" to="#">Курсы операторов
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="link" to="#">Блог
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="link" to="#">Сообщество
                  </Link>
                </li>
              </ul>
            </li>
            <li className="footer__nav-item">
              <p className="footer__title">Поддержка</p>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link className="link" to="#">FAQ
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="link" to="#">Задать вопрос
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
