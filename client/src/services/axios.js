import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.6:4000"
});

api.interceptors.request.use(async config => {
  return config;
});

export default api;