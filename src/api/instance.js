import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  withcredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

instance.interceptors.request.use(
  (config) => {
    config.headers.ACCESS_KEY = `e26c62de-2ece-4830-93cc-8184c417dd1e`;
    // const token = localStorage.getItem('accessToken');
    // if (token) {
    //   config.headers.ACCESS_KEY = `${token}}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);
