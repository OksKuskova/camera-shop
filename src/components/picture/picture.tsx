import { ImageSize } from '../../const';
import { Camera } from '../../types/camera';

type PictureProps = Pick<Camera, 'previewImgWebp'| 'previewImgWebp2x' | 'previewImg' | 'previewImg2x' | 'name'> & {
  width: number;
  height: number;
}

function Picture({previewImgWebp, previewImgWebp2x, previewImg, previewImg2x, name, width, height }: PictureProps): JSX.Element {

  return (
    <picture>
      <source type="image/webp" srcSet={`/${previewImgWebp}, /${previewImgWebp2x} 2x`}></source>
      <img src={`/${previewImg}`} srcSet={`/${previewImg2x} 2x`} width={width} height={height} alt={width === ImageSize.Width.BUNNER ? 'баннер' : name}></img>
    </picture>
  );
}

export default Picture;
