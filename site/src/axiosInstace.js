import axios from 'axios';

export const baseUrl = "http://localhost:8888";

const axiosInstance = axios.create({
  baseURL: baseUrl
});

export default axiosInstance;