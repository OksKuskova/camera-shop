import { ClassName } from '../../const';
import { Camera } from '../../types/camera';
import Price from '../price/price';

type BasketItemDescriptionProps = Pick<Camera, 'name' | 'vendorCode' | 'type' | 'level' | 'price'>

function BasketItemDescription({ name, vendorCode, type, level, price }: BasketItemDescriptionProps): JSX.Element {
  return (
    <div className="basket-item__description">
      <p className="basket-item__title">{name}</p>
      <ul className="basket-item__list">
        <li className="basket-item__list-item">
          <span className="basket-item__article">Артикул:</span>
          <span className="basket-item__number">{vendorCode}</span>
        </li>
        <li className="basket-item__list-item">{`${type} фотокамера`}</li>
        <li className="basket-item__list-item">{`${level} уровень`}</li>
      </ul>
      <Price price={price} className={ClassName.Basket} />
    </div>
  );
}

export default BasketItemDescription;
