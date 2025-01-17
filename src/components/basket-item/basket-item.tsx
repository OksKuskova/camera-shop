import BasketItemDescription from './basket-item-description/basket-item-description';
import Price from '../price/price';
import ProductImage from '../product-image/product-image';
import { ClassName } from '../../const';
import { Camera } from '../../types/camera';
import BasketItemQuantity from './basket-item-quantity/basket-item-quantity';

type BasketItemProps = {
	product: Camera;
}

function BasketItem({ product }: BasketItemProps): JSX.Element {
  const { id, name, vendorCode, type, level, price, previewImgWebp, previewImgWebp2x, previewImg, previewImg2x } = product;

  return (
    <li className="basket-item">
      <ProductImage previewImg={previewImg} previewImg2x={previewImg2x} previewImgWebp={previewImgWebp} previewImgWebp2x={previewImgWebp2x} name={name} className={ClassName.Basket} />
      <BasketItemDescription name={name} vendorCode={vendorCode} type={type} level={level} />
      <Price price={price} className={ClassName.Basket} />
      <BasketItemQuantity id={id} />
      {/* <div className="basket-item__total-price">
        <span className="visually-hidden">Общая цена:</span>37 940 ₽
      </div>
      <button className="cross-btn" type="button" aria-label="Удалить товар">
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button> */}
    </li>
  );
}

export default BasketItem;
