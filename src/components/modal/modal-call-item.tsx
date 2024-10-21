import { ChangeEvent, RefObject, SyntheticEvent, useState } from 'react';
import { ClassName } from '../../const';
import { useFocusOnModal } from '../../hooks/use-focus-on-modal';
import { useModal } from '../../hooks/use-modal';
import NotFound from '../../pages/not-found/not-found';
import BasketItemDescription from '../basket-item-description/basket-item-description';
import ProductImage from '../product-image/product-image';
import { useHandleModalClose } from '../../hooks/use-handle-modal-close';
import { PHONE_REGEX} from '../../const';
import CallItemForm from './call-item-form';
import { formatPhoneNumber } from './utils';
import { useAppDispatch } from '../../hooks';
import { postOrder } from '../../thunk-actions/order';
import { useCatalog } from '../../hooks/use-catalog';
import { Camera } from '../../types/camera';

type ModalCallItemProps = {
  modalRef: RefObject<HTMLDivElement>;
}

function ModalCallItem({modalRef}: ModalCallItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isValid, setIsValid] = useState<null | boolean>(null);

  const focusableElementsRef = useFocusOnModal();
  const handleModalClose = useHandleModalClose();

  const { activeProductId } = useModal();
  const { products } = useCatalog();

  const activeProduct = products.find((product: Camera) => product.id === activeProductId);

  if (!activeProduct) {
    return <NotFound />;
  }

  const { id, name, vendorCode, type, level, price, previewImgWebp, previewImgWebp2x, previewImg, previewImg2x } = activeProduct;

  const validatePhoneNumber = (value: string) => {
    setIsValid(PHONE_REGEX.test(value));
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    validatePhoneNumber(evt.target.value);
    setPhoneNumber(evt.target.value);
  };

  const handleFormSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    if (isValid) {
      dispatch(postOrder({body: {camerasIds: [id], coupon: null, tel: formatPhoneNumber(phoneNumber)}}))
        .unwrap()
        .then(() => {
          setPhoneNumber('');
          handleModalClose();
        });
    }
  };

  return (
    <div className="modal__content" ref={modalRef} tabIndex={-1}>
      <p className="title title--h4">Свяжитесь со мной</p>
      <div className="basket-item basket-item--short">
        <ProductImage name={name} previewImgWebp={previewImgWebp} previewImgWebp2x={previewImgWebp2x} previewImg={previewImg} previewImg2x={previewImg2x} className={ClassName.Basket} />
        <BasketItemDescription name={name} vendorCode={vendorCode} type={type} level={level} price={price} />
      </div>
      <CallItemForm phoneNumber={phoneNumber} isValid={isValid} onChange={handleInputChange} focusableElementsRef={focusableElementsRef} />
      <div className="modal__buttons">
        <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button" ref={(el) => (focusableElementsRef.current[1] = el)} onClick={handleFormSubmit}>
          <svg width="24" height="16" aria-hidden="true">
            <use xlinkHref="#icon-add-basket"></use>
          </svg>Заказать
        </button>
      </div>
      <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={handleModalClose} ref={(el) => (focusableElementsRef.current[2] = el)}>
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </div>
  );
}

export default ModalCallItem;
