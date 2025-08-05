export const ModalContent = {
  AddItem: 'AddItem',
  RemoveItem: 'RemoveItem',
  AddSuccess: 'AddSuccess',
  BasketSuccess: 'BasketSuccess',
} as const;

const { AddItem, RemoveItem, AddSuccess, BasketSuccess } = ModalContent;

export const DEFAULT_MODAL_CONTENT = AddItem;

export const ModalTitle = {
  [AddItem]: 'Добавить товар в корзину',
  [RemoveItem]: 'Удалить этот товар?',
  [AddSuccess]: 'Товар успешно добавлен в корзину',
  [BasketSuccess]: 'Спасибо за покупку',
} as const;

export const ButtonTitle = {
  [AddItem]: 'Добавить в корзину',
  [RemoveItem]: 'Удалить',
  [AddSuccess]: 'Перейти в корзину',
  [BasketSuccess]: 'Вернуться к покупкам',
} as const;

export const ButtonClassName = {
  HalfWidth: 'modal__btn--half-width',
  FitWidth: 'modal__btn--fit-width',
} as const;

export const ModalIcon = {
  [AddSuccess]: {
    Href: '#icon-success',
    Width: '86',
    Height: '80',
  },
  [BasketSuccess]: {
    Href: '#icon-review-success',
    Width: '80',
    Height: '78',
  },
};
