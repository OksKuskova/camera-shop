import { Link } from 'react-router-dom';
import { useFocusOnModal } from '../../../hooks/use-focus-on-modal';
import { useHandleModalClose } from '../../../hooks/use-handle-modal-close';

import { ButtonTitle, ModalTitle } from '../const';
import { AppRoute } from '../../../const';
import { ModalContentProps } from '../../../types/modal';

import ModalCloseButton from '../modal-close-button/modal-close-button';

function ModalAddItemSuccess({modalRef, contentValue}: ModalContentProps): JSX.Element {
  const focusableElementsRef = useFocusOnModal();
  const handleModalClose = useHandleModalClose();

  return (
    <div className="modal__content" ref={modalRef} tabIndex={-1}>
      <p className="title title--h4">{ModalTitle[contentValue]}</p>
      <svg className="modal__icon" width="86" height="80" aria-hidden="true">
        <use xlinkHref="#icon-success"></use>
      </svg>
      <div className="modal__buttons">
        <Link className="btn btn--transparent modal__btn" to={AppRoute.Root} ref={(el) => (focusableElementsRef.current[0] = el)} onClick={handleModalClose}>Продолжить покупки</Link>
        <button className="btn btn--purple modal__btn modal__btn--fit-width" ref={(el) => (focusableElementsRef.current[1] = el)}>{ButtonTitle.AddSuccess}</button>
      </div>
      <ModalCloseButton focusableElementsRef={focusableElementsRef} focusOrder={2} onClick={handleModalClose} />
    </div>
  );
}

export default ModalAddItemSuccess;
