import { Category, CameraType, Level } from '../components/form-filter/const';

export type CategoryKeys = keyof typeof Category;
export type CategoryValues = typeof Category[CategoryKeys];

export type CameraTypeKeys = keyof typeof CameraType;
export type CameraTypeValues = typeof CameraType[CameraTypeKeys];

export type LevelKeys = keyof typeof Level;
export type LevelValues = typeof Level[LevelKeys];

export type Camera = {
  id: number;
  name: string;
  vendorCode: string;
  type: CameraTypeValues;
  category: CategoryValues;
  description: string;
  level: LevelValues;
  price: number;
  rating: number;
  reviewCount: number;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
}

