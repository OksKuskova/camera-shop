import { Link } from 'react-router-dom';
import { Promo } from '../../types/promo';
import { getImageSize } from '../product-image/utils';
import { AppRoute, ClassName } from '../../const';
import Picture from '../picture/picture';

type BannerProps = {
  promoItem: Promo;
}

function Banner({ promoItem }: BannerProps): JSX.Element {

  const { id, name, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = promoItem;

  const { width, height } = getImageSize(ClassName.Banner);

  return (
    <div className="banner">
      <Picture name={name} previewImg={previewImg} previewImg2x={previewImg2x} previewImgWebp={previewImgWebp} previewImgWebp2x={previewImgWebp2x} width={width} height={height} />
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">{name}</span>
        <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
        <Link className="btn" to={AppRoute.Product.replace(':id', `${id}`)}>Подробнее</Link>
      </p>
    </div>
  );
}

export default Banner;
