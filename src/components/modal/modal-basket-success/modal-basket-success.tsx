import { useNavigate } from 'react-router-dom';
import { useFocusOnModal } from '../../../hooks/use-focus-on-modal';
import { useHandleModalClose } from '../../../hooks/use-handle-modal-close';

import { ModalTitle } from '../const';
import { AppRoute } from '../../../const';
import { ModalContentProps } from '../../../types/modal';

import ModalCloseButton from '../modal-close-button/modal-close-button';
import ModalButtons from '../modal-buttons/modal-buttons';

function ModalBasketSuccess({modalRef, contentValue}: ModalContentProps): JSX.Element {
  const navigate = useNavigate();
  const focusableElementsRef = useFocusOnModal();
  const handleModalClose = useHandleModalClose();

  const handleButtonClick = () => {
    handleModalClose();
    navigate(AppRoute.Root);
  };

  return (
    <div className="modal__content" ref={modalRef} tabIndex={-1}>
      <p className="title title--h4">{ModalTitle[contentValue]}</p>
      <svg className="modal__icon" width="80" height="78" aria-hidden="true">
        <use xlinkHref="#icon-review-success"></use>
      </svg>
      <ModalButtons contentValue={contentValue} focusableElementsRef={focusableElementsRef} onClick={handleButtonClick} />
      {/* <div className="modal__buttons">
        <button className="btn btn--purple modal__btn modal__btn--fit-width" ref={(el) => (focusableElementsRef.current[1] = el)} onClick={handleButtonClick}>{ButtonTitle[contentValue]}</button>
      </div> */}
      <ModalCloseButton focusableElementsRef={focusableElementsRef} focusOrder={2} />
    </div>
  );
}

export default ModalBasketSuccess;
