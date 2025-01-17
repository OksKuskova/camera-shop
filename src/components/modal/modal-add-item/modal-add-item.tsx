import { useCatalog } from '../../../hooks/use-catalog';
import { useModal } from '../../../hooks/use-modal';
import { useFocusOnModal } from '../../../hooks/use-focus-on-modal';
import { useHandleModalClose } from '../../../hooks/use-handle-modal-close';
import { useHandleModalOpen } from '../../../hooks/use-handle-modal-open';
import { useBasket } from '../../../hooks/use-basket';

import { ClassName } from '../../../const';
import { ButtonTitle, ModalContent, ModalTitle } from '../const';
import { getProductById } from '../../../utils';
import { ModalContentProps } from '../../../types/modal';
import { addToBasket } from '../../basket-item/utils';

import NotFound from '../../../pages/not-found/not-found';
import BasketItemDescription from '../../basket-item/basket-item-description/basket-item-description';
import ProductImage from '../../product-image/product-image';
import ModalCloseButton from '../modal-close-button/modal-close-button';

function ModalAddItem({ modalRef, contentValue }: ModalContentProps): JSX.Element {

  const focusableElementsRef = useFocusOnModal();
  const handleModalOpen = useHandleModalOpen(null, ModalContent.AddSuccess);
  const handleModalClose = useHandleModalClose();

  const { activeProductId } = useModal();
  const { products } = useCatalog();
  const { basket } = useBasket();

  const activeProduct = getProductById(products, activeProductId);

  if (!activeProduct) {
    return <NotFound />;
  }

  const { id, name, vendorCode, type, level, price, previewImgWebp, previewImgWebp2x, previewImg, previewImg2x } = activeProduct;

  const handleButtonClick = () => {
    addToBasket(basket, id);
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

      <div className="modal__buttons">
        {/* Думаю, что нужно сделать отдельный компонент, посмотри, где еще нужны иконки на этой кнопке */}
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
      </div>
      <ModalCloseButton focusableElementsRef={focusableElementsRef} focusOrder={1} onClick={handleModalClose} />
    </div>
  );
}

export default ModalAddItem;

