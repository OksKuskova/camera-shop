import { Link } from 'react-router-dom';
import { AppRoute, ClassName } from '../../const';
import { Camera } from '../../types/camera';
import Rate from '../rate/rate';
import ProductImage from '../product-image/product-image';
import Price from '../price/price';
import { useAppDispatch } from '../../hooks';
import { toggleActiveStatus, setActiveProductId } from '../../slices/modal/modal';

type ProductCardProps = {
  product: Camera;
}

function ProductCard({product}: ProductCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  const { id, name, price, rating, reviewCount, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = product;

  const handlePopupOpen = (productId: number) => {
    dispatch(toggleActiveStatus());
    dispatch(setActiveProductId(productId));
  };

  return (
    <div className="product-card">
      <ProductImage previewImg={previewImg} previewImg2x={previewImg2x} previewImgWebp={previewImgWebp} previewImgWebp2x={previewImgWebp2x} name={name} className={ClassName.Card} />
      <div className="product-card__info">
        <Rate rating={rating} reviewCount={reviewCount} className={ClassName.Card}/>
        <p className="product-card__title">{name}</p>
        <Price price={price} className={ClassName.Card} />
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button" onClick={() => handlePopupOpen(id)}>Купить</button>
        <Link className="btn btn--transparent" to={AppRoute.Product.replace(':id', `${id}`)}>Подробнее</Link>
      </div>
    </div>
  );
}

export default ProductCard;
