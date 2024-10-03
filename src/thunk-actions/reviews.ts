import { createAsyncThunk } from '@reduxjs/toolkit';
import { Camera } from '../types/camera';
import { Review } from '../types/review';
import { AxiosInstance } from 'axios';
import { ApiRoute } from './const';

export const fetchReviews = createAsyncThunk<Review[], Camera['id'], {extra: AxiosInstance}>(
  'reviews/fetchReviews',
  async (productId, { extra: api }) => {
    const { data } = await api.get<Review[]>(`${ApiRoute.Cameras}/${productId}${ApiRoute.Reviews}`);
    return data;
  },
);
