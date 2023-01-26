import axios from 'axios';

const { REACT_APP_BASE_ENDPOINT } = process.env;

const baseEndpoint = axios.create({
  url: REACT_APP_BASE_ENDPOINT
})

export default baseEndpoint;
