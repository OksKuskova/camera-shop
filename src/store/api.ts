import axios, { AxiosInstance } from 'axios';
import { ApiDefault } from './const';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: ApiDefault.ServerUrl,
    timeout: ApiDefault.RequestTimeout,
  });

  return api;
};
