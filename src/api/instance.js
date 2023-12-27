import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://115.85.181.105:8080',
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.ACCESS_KEY = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
