import BasketItemDescription from '../basket-item-description/basket-item-description';
import ProductImage from '../product-image/product-image';
import { useModal } from '../../hooks/use-modal';
import NotFound from '../../pages/not-found/not-found';
import { ClassName } from '../../const';
import { useAppDispatch } from '../../hooks';
import { toggleActiveStatus } from '../../slices/modal/modal';
import { useRef } from 'react';
import { useOutsideClick } from '../../hooks/use-outside-click';
import { useEscKeydown } from '../../hooks/use-esc-keydown';
import { useFocusOnModal } from '../../hooks/use-focus-on-modal';
import { useModalOpenStyle } from '../../hooks/use-modal-open-style';
import { getScrollbarWidth } from './utils';

function Modal(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleModalClose = () => {
    dispatch(toggleActiveStatus());
  };

  const { activeProduct } = useModal();

  const modalRef = useRef<HTMLDivElement>(null);
  const focusableElementsRef = useFocusOnModal();

  useModalOpenStyle(getScrollbarWidth());
  useOutsideClick(modalRef, handleModalClose);
  useEscKeydown(handleModalClose);

  if (!activeProduct) {
    return <NotFound />;
  }

  const { name, vendorCode, type, level, price, previewImgWebp, previewImgWebp2x, previewImg, previewImg2x } = activeProduct;

  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content" ref={modalRef} tabIndex={-1}>
          <p className="title title--h4">Свяжитесь со мной</p>
          <div className="basket-item basket-item--short">
            <ProductImage name={name} previewImgWebp={previewImgWebp} previewImgWebp2x={previewImgWebp2x} previewImg={previewImg} previewImg2x={previewImg2x} className={ClassName.Basket} />
            <BasketItemDescription name={name} vendorCode={vendorCode} type={type} level={level} price={price} />
          </div>
          <div className="custom-input form-review__item">
            <label>
              <span className="custom-input__label">Телефон
                <svg width="9" height="9" aria-hidden="true">
                  <use xlinkHref="#icon-snowflake"></use>
                </svg>
              </span>
              <input type="tel" name="user-tel" placeholder="Введите ваш номер" ref={(el) => (focusableElementsRef.current[0] = el)} required></input>
            </label>
            <p className="custom-input__error">Нужно указать номер</p>
          </div>
          <div className="modal__buttons">
            <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button" ref={(el) => (focusableElementsRef.current[1] = el)}>
              <svg width="24" height="16" aria-hidden="true">
                <use xlinkHref="#icon-add-basket"></use>
              </svg>Заказать
            </button>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={handleModalClose} ref={(el) => (focusableElementsRef.current[1] = el)}>
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
