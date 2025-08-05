import { MutableRefObject } from 'react';
import { ModalContentValues } from '../../../../types/modal';
import { ModalContent, ButtonTitle } from '../../const';
import { getButtonClassName } from '../../utils';

type ModalBasicButtonProps = {
  contentValue: ModalContentValues;
  focusableElementsRef: MutableRefObject<(HTMLInputElement | HTMLButtonElement | HTMLAnchorElement | null)[]>;
  focusOrder?: number;
  onClick: () => void;
}

function ModalBasicButton({ contentValue, focusableElementsRef, focusOrder, onClick }: ModalBasicButtonProps): JSX.Element {
  const extraClassName = getButtonClassName(contentValue);
  const handleButtonClick = onClick;

  return (
    <button
      className={`btn btn--purple modal__btn ${extraClassName}`}
      type="button"
      ref={(el) => (focusableElementsRef.current[focusOrder ?? 0] = el)}
      onClick={handleButtonClick}
    >
      {contentValue === ModalContent.AddItem ? (
        <svg width="24" height="16" aria-hidden="true">
          <use xlinkHref="#icon-add-basket"></use>
        </svg>
      ) : ''}
      {ButtonTitle[contentValue]}
    </button>
  );
}

export default ModalBasicButton;
