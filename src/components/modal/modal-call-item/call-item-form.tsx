import { ChangeEvent, MutableRefObject } from 'react';
import { ValidateError } from '../../../const';

type CallItemFormProps = {
  phoneNumber: string;
  isValid: null | boolean;
  focusableElementsRef: MutableRefObject<(HTMLInputElement | HTMLButtonElement | null)[]>;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function CallItemForm({phoneNumber, isValid, onChange, focusableElementsRef}: CallItemFormProps): JSX.Element {
  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => onChange(evt);
  const errorMessage = !phoneNumber.trim() ? ValidateError.EmptyValue : ValidateError.InvalidValue;

  return (
    <div className="custom-input form-review__item">
      <label>
        <span className="custom-input__label">Телефон
          <svg width="9" height="9" aria-hidden="true">
            <use xlinkHref="#icon-snowflake"></use>
          </svg>
        </span>
        <input
          type="tel"
          name="user-tel"
          placeholder="Введите ваш номер"
          ref={(el) => (focusableElementsRef.current[0] = el)}
          required
          value={phoneNumber}
          onChange={handleInputChange}
        >
        </input>
      </label>
      { isValid !== null && <p className="custom-input__error" style={{opacity: Number(!isValid)}}>{errorMessage}</p>}
    </div>
  );
}

export default CallItemForm;
