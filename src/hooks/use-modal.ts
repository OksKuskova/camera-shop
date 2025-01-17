import { useAppSelector } from '.';
import { checkActiveStatus, getActiveProductId, getModalContentValue } from '../slices/modal/modal';

export function useModal() {
  const isActive = useAppSelector(checkActiveStatus);
  const activeProductId = useAppSelector(getActiveProductId);
  const modalContentValue = useAppSelector(getModalContentValue);

  return {
    isActive,
    activeProductId,
    modalContentValue,
  };
}
