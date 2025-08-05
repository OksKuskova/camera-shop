import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../const';
import { MutableRefObject } from 'react';
import { ModalContentValues } from '../../../../types/modal';
import { getButtonClassName } from '../../utils';

type ModalLinkProps = {
  contentValue: ModalContentValues;
  focusableElementsRef: MutableRefObject<(HTMLInputElement | HTMLButtonElement | HTMLAnchorElement | null)[]>;
  focusOrder: number;
  onClick?: () => void;
}

function ModalLink({ contentValue, focusableElementsRef, focusOrder, onClick }:ModalLinkProps): JSX.Element {
  const extraClassName = getButtonClassName(contentValue);
  const handleLinkClick = onClick;

  return (
    <Link
      className={`btn btn--transparent modal__btn ${extraClassName}`}
      to={AppRoute.Root}
      ref={(el) => (focusableElementsRef.current[focusOrder] = el)}
      onClick={handleLinkClick}
    >
      Продолжить покупки
    </Link>
  );
}

export default ModalLink;
