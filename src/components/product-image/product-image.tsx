import { Camera } from '../../types/camera';
import { ClassName } from '../../const';
import { getImageSize } from './utils';
import Picture from '../picture/picture';

type ProductImageProps = Pick<Camera, 'previewImgWebp'| 'previewImgWebp2x' | 'previewImg' | 'previewImg2x' | 'name'> & {
  className: ClassName;
}

function ProductImage({previewImgWebp, previewImgWebp2x, previewImg, previewImg2x, name, className}: ProductImageProps): JSX.Element {
  const { width, height } = getImageSize(className);

  return (
    <div className={`${className}__img`}>
      <Picture name={name} previewImg={previewImg} previewImg2x={previewImg2x} previewImgWebp={previewImgWebp} previewImgWebp2x={previewImgWebp2x} width={width} height={height} />
    </div>
  );
}

export default ProductImage;
