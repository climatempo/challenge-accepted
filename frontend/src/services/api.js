import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/graphql',
});

export default api;
