import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Camera } from '../../types/camera';
import Rate from '../rate/rate';
import ProductImage from '../product-image/product-image';

type ProductCardProps = {
  product: Camera;
}

function ProductCard({product}: ProductCardProps): JSX.Element {
  const { id, name, price, rating, reviewCount, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = product;

  return (
    <div className="product-card">
      <div className="product-card__img">
        <ProductImage previewImg={previewImg} previewImg2x={previewImg2x} previewImgWebp={previewImgWebp} previewImgWebp2x={previewImgWebp2x} name={name} />
      </div>
      <div className="product-card__info">
        <Rate rating={rating} reviewCount={reviewCount} />
        <p className="product-card__title">{name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>{`${price} ₽`}
        </p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button">Купить</button>
        {/* ! Уточни Роут - добавь id товара */}
        <Link className="btn btn--transparent" to={AppRoute.Product.replace(':id', `${id}`)}>Подробнее</Link>
      </div>
    </div>
  );
}

export default ProductCard;
