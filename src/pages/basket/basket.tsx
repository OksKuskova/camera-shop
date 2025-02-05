import { useCatalog } from '../../hooks/use-catalog';
import { useAppSelector } from '../../hooks';
import { getBasketItems } from '../../slices/basket/basket';
import { getProductById } from '../../utils';
import BasketItem from '../../components/basket-item/basket-item';
import BasketPromo from '../../components/basket-promo/basket-promo';

function Basket(): JSX.Element {
  const basketItems = useAppSelector(getBasketItems);

  const { products } = useCatalog();

  return (
    <section className="basket">
      <div className="container">
        <h1 className="title title--h2">Корзина</h1>
        <ul className="basket__list">
          {basketItems.map((basketItem) => {
            const product = getProductById(products, basketItem.id);
            if (product) {
              return <BasketItem key={product.id} product={product} quantity={basketItem.quantity}/>;
            }
          })}
        </ul>
        <div className="basket__summary">
          <BasketPromo />
          {/* <div className="basket__summary-order">
            <p className="basket__summary-item">
              <span className="basket__summary-text">Всего:</span>
              <span className="basket__summary-value">111 390 ₽</span>
            </p>
            <p className="basket__summary-item">
              <span className="basket__summary-text">Скидка:</span>
              <span className="basket__summary-value basket__summary-value--bonus">0 ₽</span>
            </p>
            <p className="basket__summary-item">
              <span className="basket__summary-text basket__summary-text--total">К оплате:</span>
              <span className="basket__summary-value basket__summary-value--total">111 390 ₽</span>
            </p>
            <button className="btn btn--purple" type="submit">Оформить заказ
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Basket;
