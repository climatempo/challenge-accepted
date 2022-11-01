import axios from "axios";

const baseURL = process.env.API_ENDPOINT || "http://back:3000";

const api = axios.create({
  baseURL,
});

export default api;
