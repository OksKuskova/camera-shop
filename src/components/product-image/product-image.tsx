import { useLocation } from 'react-router-dom';
import { Camera } from '../../types/camera';
import { AppRoute, ClassName, ImageSize } from '../../const';

const { Width, Height } = ImageSize;

type ProductImageProps = Pick<Camera, 'previewImgWebp'| 'previewImgWebp2x' | 'previewImg' | 'previewImg2x' | 'name'> & {
  className: ClassName;
}

function ProductImage({previewImgWebp, previewImgWebp2x, previewImg, previewImg2x, name, className}: ProductImageProps): JSX.Element {
  const { pathname } = useLocation();

  const width = pathname === AppRoute.Root ? Width.CARD : Width.PRODUCT;
  const height = pathname === AppRoute.Root ? Height.CARD : Height.PRODUCT;

  return (
    <div className={`${className}__img`}>
      <picture>
        <source type="image/webp" srcSet={`/${previewImgWebp}, /${previewImgWebp2x} 2x`}></source>
        <img src={`/${previewImg}`} srcSet={`/${previewImg2x} 2x`} width={width} height={height} alt={name}></img>
      </picture>
    </div>
  );
}

export default ProductImage;
