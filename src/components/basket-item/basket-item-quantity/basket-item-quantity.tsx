import { ChangeEvent, useEffect, useState } from 'react';
import { ChangeQuantityAction, Quantity } from '../const';
import { useAppDispatch } from '../../../hooks';
import { updateItem } from '../../../slices/basket/basket';
import { QUANTITY_REGEX } from '../const';

type QuantityProps = {
  id: number;
  quantity: number;
}

function BasketItemQuantity({ id, quantity }: QuantityProps): JSX.Element {
  const [temporaryQuantity, setTemporaryQuantity] = useState<string>('');

  useEffect(() => {
    setTemporaryQuantity(String(quantity));
  }, [quantity]);

  const dispatch = useAppDispatch();

  const handleButtonClick = (action: ChangeQuantityAction) => {
    let newQuantity: number | null = null;

    if (action === ChangeQuantityAction.Increase) {
      newQuantity = quantity + Quantity.Step;
    } else {
      newQuantity = quantity - Quantity.Step;
    }
    if (newQuantity) {
      dispatch(updateItem({id, quantity: newQuantity}));
    }
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;

    if (QUANTITY_REGEX.test(value)) {
      setTemporaryQuantity(value);
    }
  };

  const handleInputBlur = () => {
    if (temporaryQuantity === '') {
      setTemporaryQuantity(String(quantity));
    } else
    if (Number(temporaryQuantity) !== quantity) {
      dispatch(updateItem({id, quantity: Number(temporaryQuantity)}));
    }
  };

  return (
    <div className="quantity">
      <button
        className="btn-icon btn-icon--prev"
        aria-label="уменьшить количество товара"
        disabled={quantity <= Quantity.Min}
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
        value={temporaryQuantity}
        maxLength={1}
        aria-label="количество товара"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      >
      </input>
      <button
        className="btn-icon btn-icon--next"
        aria-label="увеличить количество товара"
        disabled={quantity >= Quantity.Max}
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
