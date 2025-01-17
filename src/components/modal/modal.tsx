import { useRef } from 'react';
import { useOutsideClick } from '../../hooks/use-outside-click';
import { useEscKeydown } from '../../hooks/use-esc-keydown';
import { useModalOpenStyle } from '../../hooks/use-modal-open-style';
import { useHandleModalClose } from '../../hooks/use-handle-modal-close';

import { getScrollbarWidth, getModalContentRenderer } from './utils';
import { ModalContentValues } from '../../types/modal';

import NotFound from '../../pages/not-found/not-found';
import { ModalContent } from './const';


type ModalProps = {
  modalContentValue: ModalContentValues;
}

function Modal({modalContentValue}: ModalProps): JSX.Element {
  const modalRef = useRef<HTMLDivElement>(null);

  useModalOpenStyle(getScrollbarWidth());
  useOutsideClick(modalRef, useHandleModalClose());
  useEscKeydown(useHandleModalClose());

  const extraClassName = modalContentValue === ModalContent.AddSuccess ? 'modal--narrow' : '';
  const renderContent = getModalContentRenderer(modalContentValue);

  if (!renderContent) {
    return <NotFound />;
  }

  return (
    <div className={`modal is-active ${extraClassName}`}>
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        {renderContent({modalRef, contentValue: modalContentValue})}
      </div>
    </div>
  );
}

export default Modal;
