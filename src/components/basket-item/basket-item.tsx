import { memo } from 'react';import { ClassName } from '../../const';
import { Camera } from '../../types/camera';
import { useAppDispatch } from '../../hooks';
import { removeItem } from '../../slices/basket/basket';
import Price from '../price/price';
import ProductImage from '../product-image/product-image';
import BasketItemDescription from './basket-item-description/basket-item-description';
import BasketItemQuantity from './basket-item-quantity/basket-item-quantity';
import BasketItemTotalPrice from './basket-item-total-price/basket-item-total-price';

type BasketItemProps = {
	product: Camera;
  quantity: number;
}

const BasketItem = memo(({ product, quantity }: BasketItemProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const { id, name, vendorCode, type, level, price, previewImgWebp, previewImgWebp2x, previewImg, previewImg2x } = product;

  const handleButtonClick = () => dispatch(removeItem(id));

  return (

    <li className="basket-item">
      <ProductImage previewImg={previewImg} previewImg2x={previewImg2x} previewImgWebp={previewImgWebp} previewImgWebp2x={previewImgWebp2x} name={name} className={ClassName.Basket} />
      <BasketItemDescription name={name} vendorCode={vendorCode} type={type} level={level} />
      <Price price={price} className={ClassName.Basket} />
      <BasketItemQuantity id={id} quantity={quantity}/>
      <BasketItemTotalPrice price={price} quantity={quantity}/>

      <button className="cross-btn" type="button" aria-label="Удалить товар" onClick={handleButtonClick}>
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </li>
  );
});

BasketItem.displayName = 'BasketItem';

export default BasketItem;
