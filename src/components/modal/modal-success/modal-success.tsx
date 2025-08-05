import { useNavigate } from 'react-router-dom';
import { useFocusOnModal } from '../../../hooks/use-focus-on-modal';
import { useHandleModalClose } from '../../../hooks/use-handle-modal-close';

import { ModalContent, ModalTitle } from '../const';
import { AppRoute } from '../../../const';
import { ModalContentProps } from '../../../types/modal';

import ModalCloseButton from '../modal-close-button/modal-close-button';
import { getModalIconParams } from '../utils';
import ModalButtons from '../modal-buttons/modal-buttons';

function ModalSuccess({modalRef, contentValue}: ModalContentProps): JSX.Element {
  const navigate = useNavigate();
  const focusableElementsRef = useFocusOnModal();
  const handleModalClose = useHandleModalClose();

  const iconParams = getModalIconParams(contentValue);
  const navigateTo = contentValue === ModalContent.AddSuccess ? AppRoute.Basket : AppRoute.Root;

  const handleButtonClick = () => {
    handleModalClose();
    navigate(navigateTo);
  };

  return (
    <div className="modal__content" ref={modalRef} tabIndex={-1}>
      <p className="title title--h4">{ModalTitle[contentValue]}</p>
      {iconParams ? (
        <svg className="modal__icon" width={iconParams.width} height={iconParams.height} aria-hidden="true">
          <use xlinkHref={iconParams.href}></use>
        </svg>
      ) : ''}
      <ModalButtons contentValue={contentValue} focusableElementsRef={focusableElementsRef} onClick={handleButtonClick} onLinkClick={handleModalClose} />
      <ModalCloseButton focusableElementsRef={focusableElementsRef} focusOrder={2} />
    </div>
  );
}

export default ModalSuccess;
