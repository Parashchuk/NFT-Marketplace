import axiosInstance from 'axios';

const axios = axiosInstance.create({
    baseURL: 'http://marketplace-backend-dev.eu-central-1.elasticbeanstalk.com/',
});

export default axios;
