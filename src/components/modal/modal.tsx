import { useRef } from 'react';
import { useOutsideClick } from '../../hooks/use-outside-click';
import { useEscKeydown } from '../../hooks/use-esc-keydown';
import { useModalOpenStyle } from '../../hooks/use-modal-open-style';
import { useHandleModalClose } from '../../hooks/use-handle-modal-close';
import { getScrollbarWidth } from './utils';
import ModalCallItem from './modal-call-item/modal-call-item';

function Modal(): JSX.Element {
  const modalRef = useRef<HTMLDivElement>(null);

  useModalOpenStyle(getScrollbarWidth());
  useOutsideClick(modalRef, useHandleModalClose());
  useEscKeydown(useHandleModalClose());

  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <ModalCallItem modalRef={modalRef} />
      </div>
    </div>
  );
}

export default Modal;
