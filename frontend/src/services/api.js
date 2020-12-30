import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://3000-dbc42ada-161a-4a2b-b4d3-1004bde82afc.ws-us03.gitpod.io',
});

export default api;
