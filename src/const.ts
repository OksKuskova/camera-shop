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

export const ClassName = {
  Product: 'product',
  Card: 'product-card',
} as const;
