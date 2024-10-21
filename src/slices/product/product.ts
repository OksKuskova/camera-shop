import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../const';
import { Camera } from '../../types/camera';
import { RequestStatus } from '../../const';
import { State } from '../../store/type';
import { fetchProduct } from '../../thunk-actions/product';

type ProductState = {
  info: null | Camera;
  requestStatus: RequestStatus;
}

const initialState: ProductState = {
  info: null,
  requestStatus: RequestStatus.Idle,
};

const productSlice = createSlice({
  name: SliceName.Product,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.info = action.payload;
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      });
  },
});

export const getCurrentProductInfo = (state: State) => state[SliceName.Product].info;
export const getStatus = (state: State) => state[SliceName.Product].requestStatus;

export default productSlice;
