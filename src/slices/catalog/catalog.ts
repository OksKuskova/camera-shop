import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../const';
import { Camera } from '../../types/camera';
import { RequestStatus } from '../../const';
import { fetchCatalog } from '../../thunk-actions/catalog';
import { fetchPromo } from '../../thunk-actions/promo';
import { State } from '../../store/type';
import { Promo } from '../../types/promo';

type CatalogState = {
  products: Camera[];
  promo: Promo[];
  requestStatus: RequestStatus;
}

const initialState: CatalogState = {
  products: [],
  promo: [],
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
      })

      .addCase(fetchPromo.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchPromo.fulfilled, (state, action) => {
        state.promo = action.payload;
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(fetchPromo.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      });
  },
});

export const getProducts = (state: State) => state[SliceName.Catalog].products;
export const getPromo = (state:State) => state[SliceName.Catalog].promo;
export const getStatus = (state: State) => state[SliceName.Catalog].requestStatus;

export default catalogSlice;
