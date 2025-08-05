import { MutableRefObject } from 'react';
import { ModalContentValues } from '../../../types/modal';
import ModalBasicButton from './modal-basic-button/modal-basic-button';
import { ModalContent } from '../const';
import ModalLink from './modal-link/modal-link';


type ModalButtonsProps = {
  contentValue: ModalContentValues;
  focusableElementsRef: MutableRefObject<(HTMLInputElement | HTMLButtonElement | HTMLAnchorElement | null)[]>;
  onClick: () => void;
  onLinkClick?: () => void;
}

function ModalButtons({ contentValue, focusableElementsRef, onClick, onLinkClick }: ModalButtonsProps): JSX.Element {
  if (contentValue === ModalContent.AddSuccess) {
    return (
      <>
        <ModalLink contentValue={contentValue} focusableElementsRef={focusableElementsRef} focusOrder={0} onClick={onLinkClick} />
        <ModalBasicButton contentValue={contentValue} focusableElementsRef={focusableElementsRef} focusOrder={1} onClick={onClick} />
      </>
    );
  }

  if (contentValue === ModalContent.RemoveItem) {
    return (
      <>
        <ModalBasicButton contentValue={contentValue} focusableElementsRef={focusableElementsRef} onClick={onClick} />
        <ModalLink contentValue={contentValue} focusableElementsRef={focusableElementsRef} focusOrder={1} onClick={onLinkClick} />
      </>
    );
  }

  return (
    <ModalBasicButton contentValue={contentValue} focusableElementsRef={focusableElementsRef} onClick={onClick} />
  );
}

export default ModalButtons;
