import $api from '@/api/$api';
import { axios } from '@/lib/axios';
import aspidaAxios from '@aspida/axios';

export const aspida = $api(aspidaAxios(axios));
