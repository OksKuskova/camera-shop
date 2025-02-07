import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { ValidationStatus } from './const';
import { useAppDispatch } from '../../hooks';
import { postPromoCode } from '../../thunk-actions/promo-code';
import { setCoupon } from '../../slices/basket/basket';

type BasketPromoProps = {
  isBasketCleared: boolean;
}

function BasketPromo({ isBasketCleared }: BasketPromoProps): JSX.Element {
  const [promoCode, setPromoCode] = useState<string>('');
  const [validationStatus, setValidationStatus] = useState<ValidationStatus | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isBasketCleared) {
      setPromoCode('');
      setValidationStatus(null);
    }
  }, [isBasketCleared]);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setPromoCode(value);
    setValidationStatus(null);
  };

  const handleFormSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    const promo = {
      coupon: promoCode,
    };
    dispatch(postPromoCode({body: promo}))
      .unwrap()
      .then(() => {
        setValidationStatus(ValidationStatus.Valid);
        dispatch(setCoupon(promoCode));
      })
      .catch(() => {
        setValidationStatus(ValidationStatus.Invalid);
      });
  };

  return (
    <div className="basket__promo">
      <p className="title title--h4">Если у вас есть промокод на скидку, примените его в этом поле</p>
      <div className="basket-form">
        <form action="#">
          <div className={`custom-input ${validationStatus ?? ''}`}>
            <label>
              <span className="custom-input__label">Промокод</span>
              <input
                type="text"
                name="promo"
                placeholder="Введите промокод"
                value={promoCode}
                onChange={handleInputChange}
              >
              </input>
            </label>
            <p className="custom-input__error">Промокод неверный</p>
            <p className="custom-input__success">Промокод принят!</p>
          </div>
          <button
            className="btn"
            type="submit"
            onClick={handleFormSubmit}
          >Применить
          </button>
        </form>
      </div>
    </div>
  );
}

export default BasketPromo;
