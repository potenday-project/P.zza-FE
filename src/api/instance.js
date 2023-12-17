import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://223.130.128.227:8080',
  withcredentials: true,
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
