import weathers from "../database/weather";

type Locale = {
  id: number;
  name: string;
  state: string;
  latitude: number;
  longitude: number;
}

type Weather = {
  period: {
    begin: string;
    end: string;
  };
  locale: Locale;
  weather: {
    date: string;
    text: string;
    temperature: {
      min: number;
      max: number;
    };
    rain: {
      probability: number;
      precipitation: number | string;
    };
  }[];
}

class WeatherService {
  getWeather(id: string) {
    const data = weathers.find((item: Weather) => item.locale.id === Number(id));
    return data;
  }
}

export default new WeatherService();
