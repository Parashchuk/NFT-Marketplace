import axiosInstance from 'axios';

const production = 'https://marketplace-server-4tlp.onrender.com';
const develop = 'http://localhost:4000';

const axios = axiosInstance.create({
  baseURL: develop,
});

axios.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');

  return config;
});

export default axios;
