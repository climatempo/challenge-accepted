import axios from 'axios';

const serverIp = '192.168.X.X';

const api = axios.create({
	baseURL: `http://${serverIp}:3333`,
});

export default api;
