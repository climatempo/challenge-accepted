import { locales } from '../mock/locales';
import { weather } from '../mock/weather';

export const getWeatherByLocale = (city: string) => {
   try {
      const response = weather.filter(
         (data) => data.locale.name.toLowerCase() === city.toLowerCase()
      );

      return response[0];
   } catch (error) {
      console.log(error);
   }
};

export const getSuggestionsLocale = (search: string) => {
   try {
      const response = locales.filter((data) =>
         data.name.toLowerCase().includes(search.toLowerCase())
      );

      return response[0];
   } catch (error) {
      console.log(error);
   }
};
