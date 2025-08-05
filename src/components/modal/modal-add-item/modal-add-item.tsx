import { useCatalog } from '../../../hooks/use-catalog';
import { useModal } from '../../../hooks/use-modal';
import { useFocusOnModal } from '../../../hooks/use-focus-on-modal';
import { useHandleModalClose } from '../../../hooks/use-handle-modal-close';
import { useHandleModalOpen } from '../../../hooks/use-handle-modal-open';

import { ClassName } from '../../../const';
import { ModalContent, ModalTitle } from '../const';
import { getProductById } from '../../../utils';
import { ModalContentProps } from '../../../types/modal';

import NotFound from '../../../pages/not-found/not-found';
import BasketItemDescription from '../../basket-item/basket-item-description/basket-item-description';
import ProductImage from '../../product-image/product-image';
import ModalCloseButton from '../modal-close-button/modal-close-button';
import { useAppDispatch } from '../../../hooks';
import { addItem } from '../../../slices/basket/basket';
import { Quantity } from '../../basket-item/const';
import ModalButtons from '../modal-buttons/modal-buttons';

function ModalAddItem({ modalRef, contentValue }: ModalContentProps): JSX.Element {
  const dispatch = useAppDispatch();

  const focusableElementsRef = useFocusOnModal();
  const handleModalOpen = useHandleModalOpen(null, ModalContent.AddSuccess);
  const handleModalClose = useHandleModalClose();

  const { activeProductId } = useModal();
  const { products } = useCatalog();

  const activeProduct = getProductById(products, activeProductId);

  if (!activeProduct) {
    return <NotFound />;
  }

  const { id, name, vendorCode, type, level, price, previewImgWebp, previewImgWebp2x, previewImg, previewImg2x } = activeProduct;

  const handleButtonClick = () => {
    dispatch(addItem({id: id, quantity: Quantity.Min}));
    handleModalClose();
    setTimeout(handleModalOpen, 700);
  };

  return (
    <div className="modal__content" ref={modalRef} tabIndex={-1}>
      <p className="title title--h4">{ModalTitle[contentValue]}</p>
      <div className="basket-item basket-item--short">
        <ProductImage name={name} previewImgWebp={previewImgWebp} previewImgWebp2x={previewImgWebp2x} previewImg={previewImg} previewImg2x={previewImg2x} className={ClassName.Basket} />
        <BasketItemDescription name={name} vendorCode={vendorCode} type={type} level={level} price={price} />
      </div>
      <ModalButtons contentValue={contentValue} focusableElementsRef={focusableElementsRef} onClick={handleButtonClick} />
      {/* <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
          ref={(el) => (focusableElementsRef.current[0] = el)}
          onClick={handleButtonClick}
        >
          <svg width="24" height="16" aria-hidden="true">
            <use xlinkHref="#icon-add-basket"></use>
          </svg>
          {ButtonTitle[contentValue]}
        </button>
      </div> */}
      <ModalCloseButton focusableElementsRef={focusableElementsRef} focusOrder={1} />
    </div>
  );
}

export default ModalAddItem;

