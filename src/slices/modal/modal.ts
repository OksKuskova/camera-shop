import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from '../../store/type';
import { SliceName } from '../const';
import { Camera } from '../../types/camera';
import { ModalContentValues } from '../../types/modal';
import { DEFAULT_MODAL_CONTENT } from '../../components/modal/const';

type ModalState = {
  isActive: boolean;
  activeProductId: null | number;
  modalContentValue: ModalContentValues;
}

const initialState: ModalState = {
  isActive: false,
  activeProductId: null,
  modalContentValue: DEFAULT_MODAL_CONTENT,
};

const modalSlice = createSlice({
  name: SliceName.Modal,
  initialState,
  reducers: {
    toggleActiveStatus(state) {
      state.isActive = !state.isActive;
    },
    setActiveProductId(state, action: PayloadAction<Camera['id'] | null>) {
      state.activeProductId = action.payload;
    },
    setModalContentValue(state, action: PayloadAction<ModalContentValues>) {
      state.modalContentValue = action.payload;
    },
  },
});

export const checkActiveStatus = (state: State) => state[SliceName.Modal].isActive;
export const getActiveProductId = (state: State) => state[SliceName.Modal].activeProductId;
export const getModalContentValue = (state: State) => state[SliceName.Modal].modalContentValue;

export const {toggleActiveStatus, setActiveProductId, setModalContentValue} = modalSlice.actions;

export default modalSlice;
