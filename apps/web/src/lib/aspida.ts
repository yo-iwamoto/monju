import { API_URL } from '@/config/const';
import { axios } from '@/lib/axios';
import $api from '@/api/$api';
import aspidaAxios from '@aspida/axios';

export const aspida = $api(
  aspidaAxios(axios, {
    baseURL: API_URL,
  })
);
