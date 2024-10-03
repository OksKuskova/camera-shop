import { createAsyncThunk } from '@reduxjs/toolkit';
import { Camera } from '../types/camera';
import { AxiosInstance } from 'axios';
import { ApiRoute } from './const';

export const fetchCatalog = createAsyncThunk<Camera[], undefined, {extra: AxiosInstance}>(
  'catalog/fetchCatalog',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Camera[]>(ApiRoute.Cameras);
    return data;
  },
);
