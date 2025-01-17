export const ModalContent = {
  AddItem: 'AddItem',
  RemoveItem: 'RemoveItem',
  AddSuccess: 'AddSuccess',
} as const;

const { AddItem, RemoveItem, AddSuccess } = ModalContent;

export const DEFAULT_MODAL_CONTENT = AddItem;

export const ModalTitle = {
  [AddItem]: 'Добавить товар в корзину',
  [RemoveItem]: 'Удалить этот товар?',
  [AddSuccess]: 'Товар успешно добавлен в корзину',
} as const;

export const ButtonTitle = {
  [AddItem]: 'Добавить в корзину',
  [RemoveItem]: 'Удалить',
  [AddSuccess]: 'Перейти в корзину',
} as const;
