import { createAsyncThunk } from '@reduxjs/toolkit';
import { Camera } from '../types/camera';
import { AxiosInstance } from 'axios';
import { ApiRoute } from './const';

export const fetchProduct = createAsyncThunk<Camera, Camera['id'], {extra: AxiosInstance}>(
  'product/fetchProduct',
  async (productId, { extra: api }) => {
    const { data } = await api.get<Camera>(`${ApiRoute.Cameras}/${productId}`);
    return data;
  },
);
