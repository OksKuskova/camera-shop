import { useAppDispatch } from '.';
import { toggleActiveStatus } from '../slices/modal/modal';

export function useHandleModalClose() {
  const dispatch = useAppDispatch();

  const handleModalClose = () => {
    dispatch(toggleActiveStatus());
  };

  return handleModalClose;
}

