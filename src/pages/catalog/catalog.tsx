import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Catalog(): JSX.Element {
  return (
    <section className="catalog">
      <div className="container">
        <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
        <div className="page-content__columns">
          <div className="catalog__aside">
            <img src="img/banner.png"></img>
            {/* div class="catalog-filter" */}
          </div>
          <div className="catalog__content">
            {/* div class="catalog-sort" */}
            <div className="cards catalog__cards">
              <div className="product-card">
                <div className="product-card__img">
                  <picture>
                    <source type="image/webp" srcSet="img/content/das-auge.webp, img/content/das-auge@2x.webp 2x"></source>
                    <img src="img/content/das-auge.jpg" srcSet="img/content/das-auge@2x.jpg 2x" width="280" height="240" alt="Ретрокамера «Das Auge IV»"></img>
                  </picture>
                </div>
                <div className="product-card__info">
                  <div className="rate product-card__rate">
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                    <p className="visually-hidden">Рейтинг: 3</p>
                    <p className="rate__count">
                      <span className="visually-hidden">Всего оценок:</span>23
                    </p>
                  </div>
                  <p className="product-card__title">Ретрокамера «Das Auge IV»</p>
                  <p className="product-card__price">
                    <span className="visually-hidden">Цена:</span>73 450 ₽
                  </p>
                </div>
                <div className="product-card__buttons">
                  <button className="btn btn--purple product-card__btn" type="button">Купить</button>
                  {/* ! Уточни Роут - добавь id товара */}
                  <Link className="btn btn--transparent" to={AppRoute.Product}>Подробнее</Link>
                </div>
              </div>
            </div>
            {/* div class="pagination" */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
