import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from '../../store/type';
import { SliceName } from '../const';
import { Camera } from '../../types/camera';

type ModalState = {
  isActive: boolean;
  activeProductId: null | number;
}

const initialState: ModalState = {
  isActive: false,
  activeProductId: null,
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
  },
});

export const checkActiveStatus = (state: State) => state[SliceName.Modal].isActive;
export const getActiveProductId = (state: State) => state[SliceName.Modal].activeProductId;

export const {toggleActiveStatus, setActiveProductId} = modalSlice.actions;

export default modalSlice;
