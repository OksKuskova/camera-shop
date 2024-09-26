type CameraTypes = 'Коллекционная' | 'Моментальная' | 'Цифровая' | 'Плёночная';
type Categories = 'Видеокамера' | 'Фотоаппарат';
type Levels = 'Нулевой' | 'Любительский' | 'Профессиональный';

export type Camera = {
  id: number;
  name: string;
  vendorCode: string;
  type: CameraTypes;
  category: Categories;
  description: string;
  level: Levels;
  price: number;
  rating: number;
  reviewCount: number;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
}

