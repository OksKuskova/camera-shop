import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createApi } from './api';
import catalogSlice from '../slices/catalog/catalog';
import productSlice from '../slices/product/product';
import reviewsSlice from '../slices/reviews/reviews';
import modalSlice from '../slices/modal/modal';

const api = createApi();

const reducer = combineReducers({
  [catalogSlice.name]: catalogSlice.reducer,
  [productSlice.name]: productSlice.reducer,
  [reviewsSlice.name]: reviewsSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
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
