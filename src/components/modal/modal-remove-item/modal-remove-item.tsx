import { Link } from 'react-router-dom';
import { AppRoute, ClassName } from '../../../const';
import { useCatalog } from '../../../hooks/use-catalog';
import { useFocusOnModal } from '../../../hooks/use-focus-on-modal';
import { useHandleModalClose } from '../../../hooks/use-handle-modal-close';
import { useModal } from '../../../hooks/use-modal';
import NotFound from '../../../pages/not-found/not-found';
import { Camera } from '../../../types/camera';
import BasketItemDescription from '../../basket-item-description/basket-item-description';
import ProductImage from '../../product-image/product-image';
import ModalCloseButton from '../modal-close-button/modal-close-button';

function ModalRemoveItem(): JSX.Element {
  const focusableElementsRef = useFocusOnModal();
  const handleModalClose = useHandleModalClose();

  const { activeProductId } = useModal();
  const { products } = useCatalog();

  const activeProduct = products.find((product: Camera) => product.id === activeProductId);

  if (!activeProduct) {
    return <NotFound />;
  }

  const { name, vendorCode, type, level, previewImgWebp, previewImgWebp2x, previewImg, previewImg2x } = activeProduct;

  return (
    <div className="modal__content">
      <p className="title title--h4">Удалить этот товар?</p>
      <div className="basket-item basket-item--short">
        <ProductImage name={name} previewImgWebp={previewImgWebp} previewImgWebp2x={previewImgWebp2x} previewImg={previewImg} previewImg2x={previewImg2x} className={ClassName.Basket} />
        <BasketItemDescription name={name} vendorCode={vendorCode} type={type} level={level} />
      </div>
      <div className="modal__buttons">
        <button className="btn btn--purple modal__btn modal__btn--half-width" type="button">Удалить</button>
        <Link className="btn btn--transparent modal__btn modal__btn--half-width" to={AppRoute.Root}>Продолжить покупки</Link>
      </div>
      <ModalCloseButton focusableElementsRef={focusableElementsRef} onClick={handleModalClose} />
    </div>
  );
}

export default ModalRemoveItem;
