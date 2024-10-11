import { ClassName, ImageSize } from '../../const';

const { Width, Height } = ImageSize;

export const getImageSize = (className: ClassName) => {
  switch (className) {
    case ClassName.Card:
      return {
        width: Width.CARD,
        height: Height.CARD,
      };
    case ClassName.Basket:
      return {
        width: Width.BASKET,
        height: Height.BASKET,
      };
    default:
      return {
        width: Width.PRODUCT,
        height: Height.PRODUCT,
      };
  }
};
