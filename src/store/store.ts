import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createApi } from './api';
import productsSlice from '../slices/products/products';

const api = createApi();

const reducer = combineReducers({
  [productsSlice.name]: productsSlice.reducer,
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
