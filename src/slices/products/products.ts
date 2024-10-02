import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../const';
import { Camera } from '../../types/camera';
import { RequestStatus } from '../../const';
import { fetchProducts } from '../../thunk-actions/products';
import { State } from '../../store/type';

type ProductsState = {
  products: Camera[];
  requestStatus: RequestStatus;
}

const initialState: ProductsState = {
  products: [],
  requestStatus: RequestStatus.Idle,
};

const productsSlice = createSlice({
  name: SliceName.Products,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      });
  },
});

export const getProducts = (state: State) => state[SliceName.Products].products;
export const getStatus = (state: State) => state[SliceName.Products].requestStatus;
// export const {} = counterSlice.actions;
export default productsSlice;
