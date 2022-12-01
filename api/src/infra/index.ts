import { mockupData } from '../mock/data';

export const getCityWeather = (city: string) => {
   try {
      const response = mockupData.filter(
         (data) => data.name.toLowerCase() === city.toLowerCase()
      );

      return response[0].weather;
   } catch (error) {
      console.log(error);
   }
};
