import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createApi } from './api';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import catalogSlice from '../slices/catalog/catalog';
import productSlice from '../slices/product/product';
import reviewsSlice from '../slices/reviews/reviews';
import modalSlice from '../slices/modal/modal';
import filtersSlice from '../slices/filters/filters';
import basketSlice from '../slices/basket/basket';
import { SliceName } from '../slices/const';

const api = createApi();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [SliceName.Basket],
};

const reducer = combineReducers({
  [catalogSlice.name]: catalogSlice.reducer,
  [productSlice.name]: productSlice.reducer,
  [reviewsSlice.name]: reviewsSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
  [filtersSlice.name]: filtersSlice.reducer,
  [basketSlice.name]: basketSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export const persistor = persistStore(store);
