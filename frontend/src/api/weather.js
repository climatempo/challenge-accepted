import axios from './base';

const getWeather = city => {
  return axios.get(`/weather?city=${city}`).then(res => res.data);
};

export default getWeather;
