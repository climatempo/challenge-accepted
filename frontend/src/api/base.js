import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
