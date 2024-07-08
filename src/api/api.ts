import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://restcountries.com/v3.1",
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;