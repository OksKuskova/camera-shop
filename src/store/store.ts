import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createApi } from './api';
import catalogSlice from '../slices/catalog/catalog';
import productSlice from '../slices/product/product';

const api = createApi();

const reducer = combineReducers({
  [catalogSlice.name]: catalogSlice.reducer,
  [productSlice.name]: productSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    }),
});
