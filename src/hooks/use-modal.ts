import { useAppSelector } from '.';
import { checkActiveStatus, getActiveProductId } from '../slices/modal/modal';

export function useModal() {
  const isActive = useAppSelector(checkActiveStatus);
  const activeProductId = useAppSelector(getActiveProductId);

  return {
    isActive,
    activeProductId,
  };
}
