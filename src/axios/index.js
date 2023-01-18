import axiosInstance from 'axios';

const production = 'https://marketplace-server-4tlp.onrender.com';
const develop = 'http://localhost:4000';

const axios = axiosInstance.create({
  baseURL: develop,
});

export default axios;
