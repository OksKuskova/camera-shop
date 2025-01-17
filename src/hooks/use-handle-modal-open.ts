import { useAppDispatch } from '.';
import { setActiveProductId, setModalContentValue, toggleActiveStatus } from '../slices/modal/modal';
import { ModalContentValues } from '../types/modal';

export function useHandleModalOpen(productId: number | null, modalContentValue: ModalContentValues) {
  const dispatch = useAppDispatch();

  const handleModalOpen = () => {
    dispatch(toggleActiveStatus());
    dispatch(setActiveProductId(productId));
    dispatch(setModalContentValue(modalContentValue));
  };

  return handleModalOpen;
}

