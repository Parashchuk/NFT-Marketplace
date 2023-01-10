import axiosInstance from 'axios';

const axios = axiosInstance.create({
  baseURL: 'https://marketplace-server-4tlp.onrender.com',
});

export default axios;
