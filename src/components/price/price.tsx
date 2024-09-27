import { useLocation } from 'react-router-dom';
import { Camera } from '../../types/camera';
import { AppRoute, ClassName } from '../../const';

type PriceProps = Pick<Camera, 'price'>

function Price({ price }: PriceProps): JSX.Element {
  const { pathname } = useLocation();
  const name = pathname === AppRoute.Root ? ClassName.Card : ClassName.Product;

  return (
    <p className={`${name}__price`}>
      <span className="visually-hidden">Цена:</span>{`${price} ₽`}
    </p>
  );
}

export default Price;
