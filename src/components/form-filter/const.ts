import { CameraTypeValues } from '../../types/camera';

export const Category = {
  Photocamera: 'Фотоаппарат',
  Videocamera: 'Видеокамера',
} as const;

export const CameraType = {
  Digital: 'Цифровая',
  Film: 'Плёночная',
  Snapshot: 'Моментальная',
  Collection: 'Коллекционная',
} as const;

export const VIDEOCAMERA_DISABLED_TYPES: CameraTypeValues[] = [CameraType.Film, CameraType.Snapshot];

export const Level = {
  Zero: 'Нулевой',
  NonProfessional: 'Любительский',
  Professional: 'Профессиональный',
} as const;

export const PriceRange = {
  MIN: 'min',
  MAX: 'max',
};
