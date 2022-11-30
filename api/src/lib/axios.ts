import axios from 'axios';
import { OPEN_WEATHER_BASE_URL } from '../constants/url';

const headers = {
   headers: {
      'X-RapidAPI-Key': process.env.RapidAPIKey,
      'X-RapidAPI-Host': process.env.RapidAPIHost,
   },
};

export const getWeatherByCity = async (city: string) => {
   try {
      await axios
         .get(`${OPEN_WEATHER_BASE_URL}/${city}`, headers)
         .then((response) => {
            console.log(response.data);
         })
         .catch((error) => {
            console.error(error);
         });
   } catch (error) {
      console.log(error);
   }
};
