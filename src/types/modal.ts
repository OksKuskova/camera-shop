import { RefObject } from 'react';
import { ModalContent } from '../components/modal/const';

export type ModalContentKey = keyof typeof ModalContent;
export type ModalContentValues = typeof ModalContent[ModalContentKey];

export type ModalContentProps = {
  modalRef: RefObject<HTMLDivElement>;
  contentValue: ModalContentValues;
};
