import { Camera } from '../../types/camera';
import { ClassName } from '../../const';

type PriceProps = Pick<Camera, 'price'> & {
  className: ClassName;
}

function Price({ price, className }: PriceProps): JSX.Element {

  return (
    <p className={`${className}__price`}>
      <span className="visually-hidden">Цена:</span>{`${price} ₽`}
    </p>
  );
}

export default Price;
