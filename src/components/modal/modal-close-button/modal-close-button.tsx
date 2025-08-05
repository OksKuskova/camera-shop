import { MutableRefObject } from 'react';
import { useHandleModalClose } from '../../../hooks/use-handle-modal-close';

type ModalCloseButtonProps = {
  focusableElementsRef: MutableRefObject<(HTMLInputElement | HTMLButtonElement | HTMLAnchorElement | null)[]>;
  focusOrder: number;
};

function ModalCloseButton({focusableElementsRef, focusOrder}: ModalCloseButtonProps): JSX.Element {
  const handleModalClose = useHandleModalClose();

  return (
    <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={handleModalClose} ref={(el) => (focusableElementsRef.current[focusOrder] = el)}>
      <svg width="10" height="10" aria-hidden="true">
        <use xlinkHref="#icon-close"></use>
      </svg>
    </button>
  );
}

export default ModalCloseButton;
