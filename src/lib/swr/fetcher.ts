import axios from 'axios';

axios.interceptors.request.use((config) => {
  // TODO: authentication;
  return config;
});

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);
