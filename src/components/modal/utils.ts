import { INITIAL_PHONE_SYMBOL } from '../../const';
import { ModalContentValues } from '../../types/modal';
import { ModalContent } from './const';
import ModalAddItemSuccess from './modal-add-item-success/modal-add-item-success';

import ModalAddItem from './modal-add-item/modal-add-item';
import ModalRemoveItem from './modal-remove-item/modal-remove-item';

export const getScrollbarWidth = () => window.innerWidth - document.body.clientWidth;

export const formatPhoneNumber = (phone: string) => {
  const cleanedPhone = phone.replace(/\D/g, '');
  return `${INITIAL_PHONE_SYMBOL}${cleanedPhone.slice(1)}`;
};

export const getModalContentRenderer = (modalContentValue: ModalContentValues) => {
  switch (modalContentValue) {
    case ModalContent.AddItem:
      return ModalAddItem;
    case ModalContent.RemoveItem:
      return ModalRemoveItem;
    case ModalContent.AddSuccess:
      return ModalAddItemSuccess;
  }
};
