
import { useAppSelector } from '.';
import { checkActiveStatus, getActiveProductId } from '../slices/modal/modal';
import { Camera } from '../types/camera';
import { useCatalog } from './use-catalog';

export function useModal() {
  const { products } = useCatalog();

  const isActive = useAppSelector(checkActiveStatus);
  const activeProductId = useAppSelector(getActiveProductId);

  const activeProduct = products.find((product: Camera) => product.id === activeProductId);

  return {
    isActive,
    activeProduct,
  };
}
