import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute } from './const';
import { Order } from '../types/order';

type PostOrderProps = {
  body: Order;
}

export const postOrder = createAsyncThunk<Order, PostOrderProps, {extra: AxiosInstance}>(
  'review/postReviews',
  async ({ body }, { extra: api }) => {
    const { data } = await api.post<Order>(ApiRoute.Orders, body);
    return data;
  },
);
