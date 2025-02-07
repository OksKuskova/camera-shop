import { SyntheticEvent } from 'react';
import { useAppSelector } from '../../hooks';
import { getDiscount } from '../../slices/basket/basket';

type BasketOrderProps = {
  price: number;
  onSubmit: (evt: SyntheticEvent) => void;
}

function BasketOrder({ price, onSubmit }: BasketOrderProps): JSX.Element {
  const discount = useAppSelector(getDiscount);

  const discountValue = price * discount / 100;
  const totalPrice = price - discountValue;

  const handleFormSubmit = onSubmit;

  return (
    <div className="basket__summary-order">
      <p className="basket__summary-item">
        <span className="basket__summary-text">Всего:</span>
        <span className="basket__summary-value">{`${price} ₽`}</span>
      </p>
      <p className="basket__summary-item">
        <span className="basket__summary-text">Скидка:</span>
        <span className="basket__summary-value basket__summary-value--bonus">{`${discountValue} ₽`}</span>
      </p>
      <p className="basket__summary-item">
        <span className="basket__summary-text basket__summary-text--total">К оплате:</span>
        <span className="basket__summary-value basket__summary-value--total">{`${totalPrice} ₽`}</span>
      </p>
      <button
        className="btn btn--purple"
        type="submit"
        onClick={handleFormSubmit}
      >
        Оформить заказ
      </button>
    </div>
  );
}

export default BasketOrder;

