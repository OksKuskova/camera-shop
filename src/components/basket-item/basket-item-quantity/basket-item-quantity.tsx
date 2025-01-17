import { ChangeEvent, useEffect, useState } from 'react';
import { useBasket } from '../../../hooks/use-basket';
import { ChangeQuantityAction, Quantity } from '../const';
import { changeQuantity, getItemInBasketById } from '../utils';

type QuantityProps = {
  id: number;
}

function BasketItemQuantity({id}: QuantityProps): JSX.Element {
  const [userQuantity, setUserQuantity] = useState<string>('');
  const [, setDummy] = useState<number>(0);

  const { basket } = useBasket();
  const currentItem = getItemInBasketById(basket, id);

  useEffect(() => {
    if (currentItem) {
      setUserQuantity(String(currentItem.quantity));
    }
  }, []);

  if (!currentItem) {
    return <div></div>;
  }

  const forceUpdate = () => {
    setDummy((prev) => prev + 1);
  };

  const handleButtonClick = (action: ChangeQuantityAction) => {
    changeQuantity(basket, id, action);
    setUserQuantity(String(currentItem?.quantity));
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    const numericValue = Number(value);

    if (Number.isNaN(numericValue)) {
      return;
    }

    setUserQuantity(value);
  };

  const handleInputBlur = () => {
    if (userQuantity === '') {
      setUserQuantity(String(currentItem.quantity));
    } else {
      changeQuantity(basket, id, ChangeQuantityAction.Set, Number(userQuantity));
      if (Number(userQuantity) === currentItem.quantity) {
        forceUpdate();
      } else {
        setUserQuantity(String(currentItem.quantity));
      }
    }
  };

  return (
    <div className="quantity">
      <button
        className="btn-icon btn-icon--prev"
        aria-label="уменьшить количество товара"
        disabled={currentItem && currentItem.quantity <= Quantity.Min}
        onClick={() => handleButtonClick(ChangeQuantityAction.Reduce)}
      >
        <svg width="7" height="12" aria-hidden="true">
          <use xlinkHref="#icon-arrow"></use>
        </svg>
      </button>
      <label className="visually-hidden" htmlFor="counter1"></label>
      <input
        type="text"
        id="counter1"
        value={userQuantity}
        pattern='\d*'
        maxLength={1}
        aria-label="количество товара"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      >
      </input>
      <button
        className="btn-icon btn-icon--next"
        aria-label="увеличить количество товара"
        disabled={currentItem && currentItem.quantity >= Quantity.Max}
        onClick={() => handleButtonClick(ChangeQuantityAction.Increase)}
      >
        <svg width="7" height="12" aria-hidden="true">
          <use xlinkHref="#icon-arrow"></use>
        </svg>
      </button>
    </div>
  );
}

export default BasketItemQuantity;
