import { MutableRefObject } from 'react';

type ModalCloseButtonProps = {
  focusableElementsRef: MutableRefObject<(HTMLInputElement | HTMLButtonElement | HTMLAnchorElement | null)[]>;
  focusOrder: number;
  onClick: () => void;
};

function ModalCloseButton({focusableElementsRef, focusOrder, onClick}: ModalCloseButtonProps): JSX.Element {
  const handleModalClose = () => onClick();

  return (
    <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={handleModalClose} ref={(el) => (focusableElementsRef.current[focusOrder] = el)}>
      <svg width="10" height="10" aria-hidden="true">
        <use xlinkHref="#icon-close"></use>
      </svg>
    </button>
  );
}

export default ModalCloseButton;
