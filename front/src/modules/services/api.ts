import axios from "axios";

const baseURL = import.meta.env.API_ENDPOINT || "http://localhost:3000";

const api = axios.create({
  baseURL,
});

export default api;
