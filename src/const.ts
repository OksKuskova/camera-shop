export enum RequestStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Failed = 'failed',
}

export enum ClassName {
  Product = 'product',
  Card = 'product-card',
  Review = 'review-card',
  Basket = 'basket-item',
}

export const AppRoute = {
  Root: '/',
  Product: '/camera/:id',
  NotFound: '/*',
} as const;

export const ImageSize = {
  Width: {
    PRODUCT: 560,
    CARD: 280,
    BASKET: 140,
  },
  Height: {
    PRODUCT: 480,
    CARD: 240,
    BASKET: 120,
  },
} as const;

export const DateFormat = {
  DayMonth: 'DD MMMM',
  YearMonthDay: 'YYYY-MM-DD',
} as const;

export const PHONE_REGEX = /^(?:\+7|8)[ (]?9\d{2}[ )]?\d{3}[ -]?\d{2}[ -]?\d{2}$/;

export const ValidateError = {
  EmptyValue: 'Нужно указать номер',
  InvalidValue: 'Формат номера: +7(9XX)XXX-XX-XX',
} as const;

export const InitialPhoneSymbol = {
  Seven: '+7',
  Eight: '8',
} as const;

export const BreadcrumbsName = {
  Main: 'Главная',
  Catalog: 'Каталог',
};
