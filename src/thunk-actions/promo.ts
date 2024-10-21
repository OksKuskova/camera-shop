import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute } from './const';
import { Promo } from '../types/promo';

export const fetchPromo = createAsyncThunk<Promo[], undefined, {extra: AxiosInstance}>(
  'catalog/fetchPromo',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Promo[]>(ApiRoute.Promo);
    return data;
  },
);
