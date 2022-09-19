import Axios from 'axios';

const axios = Axios.create();

const token = 'token';

axios.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${token}`,
  };

  return config;
});

export { axios };
