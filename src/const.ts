export const PHONE_REGEX = /^(?:\+7|8)[ (]?9\d{2}[ )]?\d{3}[ -]?\d{2}[ -]?\d{2}$/;
export const INITIAL_PHONE_SYMBOL = '+7';

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
  Banner = 'banner',
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
    BUNNER: 1280,
  },
  Height: {
    PRODUCT: 480,
    CARD: 240,
    BASKET: 120,
    BUNNER: 280,
  },
} as const;

export const DateFormat = {
  DayMonth: 'DD MMMM',
  YearMonthDay: 'YYYY-MM-DD',
} as const;

export const ValidateError = {
  EmptyValue: 'Нужно указать номер',
  InvalidValue: 'Формат номера: +7(9XX)XXX-XX-XX',
} as const;

export const Title = {
  Main: 'Главная',
  Catalog: 'Каталог',
} as const;

export const Sort = {
  Type: {
    PRICE: 'price',
    POPULAR: 'rating',
  },
  Order: {
    ASCENDING: 'up',
    DESCENDING: 'down',
  },
} as const;
