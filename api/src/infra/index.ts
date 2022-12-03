import { mockupData } from '../mock/data';

export const getWeatherByLocale = (city: string) => {
   try {
      const response = mockupData.filter(
         (data) => data.name.toLowerCase() === city.toLowerCase()
      );

      return response[0];
   } catch (error) {
      console.log(error);
   }
};
