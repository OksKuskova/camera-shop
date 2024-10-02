import { createAsyncThunk } from '@reduxjs/toolkit';
import { Camera } from '../types/camera';
import { AxiosInstance } from 'axios';
import { ApiRoute } from './const';

export const fetchProducts = createAsyncThunk<Camera[], undefined, {extra: AxiosInstance}>(
  'products/fetchProducts',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Camera[]>(ApiRoute.Cameras);
    return data;
  },
);
