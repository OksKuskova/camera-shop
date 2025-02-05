import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute } from './const';
import { PromoCode } from '../types/promo-code';

type PostPromoCodeProps = {
  body: PromoCode;
}

export const postPromoCode = createAsyncThunk<number, PostPromoCodeProps, {extra: AxiosInstance}>(
  'promoCode/postPromoCode',
  async ({ body }, { extra: api }) => {
    const { data } = await api.post<number>(ApiRoute.PromoCode, body);
    return data;
  },
);
