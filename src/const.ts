export const AppRoute = {
  Root: '/',
  Product: '/camera/:id',
  NotFound: '/*',
} as const;

export const ImageSize = {
  Width: {
    PRODUCT: 560,
    CARD: 280,
  },
  Height: {
    PRODUCT: 480,
    CARD: 240,
  },
} as const;

export enum ClassName {
  Product = 'product',
  Card = 'product-card',
  Review = 'review-card',
}

export const DateFormat = {
  DayMonth: 'DD MMMM',
  YearMonthDay: 'YYYY-MM-DD',
} as const;
