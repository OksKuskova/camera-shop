import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../const';
import { Camera } from '../../types/camera';
import { RequestStatus } from '../../const';
import { fetchCatalog } from '../../thunk-actions/catalog';
import { State } from '../../store/type';

type CatalogState = {
  products: Camera[];
  requestStatus: RequestStatus;
}

const initialState: CatalogState = {
  products: [],
  requestStatus: RequestStatus.Idle,
};

const catalogSlice = createSlice({
  name: SliceName.Catalog,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.products = action.payload;
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(fetchCatalog.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      });
  },
});

export const getProducts = (state: State) => state[SliceName.Catalog].products;
export const getStatus = (state: State) => state[SliceName.Catalog].requestStatus;
// export const {} = counterSlice.actions;
export default catalogSlice;
