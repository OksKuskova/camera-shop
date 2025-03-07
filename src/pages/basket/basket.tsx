import { useCatalog } from '../../hooks/use-catalog';
import { useAppDispatch } from '../../hooks';
import { getProductById } from '../../utils';
import BasketItem from '../../components/basket-item/basket-item';
import BasketPromo from '../../components/basket-promo/basket-promo';
import { SyntheticEvent, useEffect, useState } from 'react';
import BasketOrder from '../../components/basket-order/basket-order';
import { useBasket } from '../../hooks/use-basket';
import { postOrder } from '../../thunk-actions/order';
import { clearBasket } from '../../slices/basket/basket';

function Basket(): JSX.Element {
  const [price, setPrice] = useState<number>(0);
  const [isBasketCleared, setIsBasketCleared] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const { basketItems, coupon, itemIds } = useBasket();
  const { products } = useCatalog();

  useEffect(() => {
    let basketPrice = 0;

    basketItems.map(({ id, quantity }) => {
      const productIndex = products.findIndex((product) => product.id === id);
      if (productIndex >= 0) {
        basketPrice += products[productIndex].price * quantity;
      }
    });

    setPrice(basketPrice);
  }, [basketItems, products]);

  const handleFormSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(postOrder({body: {camerasIds: itemIds, coupon: coupon}}))
      .unwrap()
      .then(() => {
        dispatch(clearBasket());
        setIsBasketCleared(true);

        setTimeout(() => {
          setIsBasketCleared(false);
        }, 2000);
      });
  };

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
          <BasketPromo isBasketCleared={isBasketCleared} />
          <BasketOrder price={price} onSubmit={handleFormSubmit}/>
        </div>
      </div>
    </section>
  );
}

export default Basket;
