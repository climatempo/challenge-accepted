import axios from 'axios';
/**Configura o axios para requisição ajax com a rota correta */
const api = axios.create({
    baseURL: "http://localhost:8000/"
});

export default api;