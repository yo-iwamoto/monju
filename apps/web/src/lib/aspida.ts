import aspidaAxios from '@aspida/axios';
import $api from '@/api/$api';
import { axios } from '@/lib/axios';

export const aspida = $api(aspidaAxios(axios));
