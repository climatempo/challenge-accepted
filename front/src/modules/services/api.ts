import axios from "axios";

const baseURL = import.meta.env.VITE_API_ENDPOINT || "http://localhost:3000";

const api = axios.create({
  baseURL,
});

export default api;
