// import { useLocation } from 'react-router-dom';
import { Camera } from '../../types/camera';
import { ClassName } from '../../const';

type PriceProps = Pick<Camera, 'price'> & {
  className: ClassName;
}

function Price({ price, className }: PriceProps): JSX.Element {
  // const { pathname } = useLocation();
  // const name = pathname === AppRoute.Root ? ClassName.Card : ClassName.Product;

  return (
    <p className={`${className}__price`}>
      <span className="visually-hidden">Цена:</span>{`${price} ₽`}
    </p>
  );
}

export default Price;
