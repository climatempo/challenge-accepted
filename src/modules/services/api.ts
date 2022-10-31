import axios from "axios";

const baseURL = process.env.API_ENDPOINT;

const api = axios.create({
  baseURL,
});

export default api;
