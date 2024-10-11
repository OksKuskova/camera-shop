import { Camera } from '../../types/camera';
import { ClassName } from '../../const';
import { getImageSize } from './utils';


type ProductImageProps = Pick<Camera, 'previewImgWebp'| 'previewImgWebp2x' | 'previewImg' | 'previewImg2x' | 'name'> & {
  className: ClassName;
}

function ProductImage({previewImgWebp, previewImgWebp2x, previewImg, previewImg2x, name, className}: ProductImageProps): JSX.Element {
  const { width, height } = getImageSize(className);

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
