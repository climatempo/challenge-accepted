import axios from 'axios';

window.console.log('process.env.API_BASE_URL', process.env.API_BASE_URL);

export default axios.create({
  baseURL: 'http://localhost:4000/api',
});
