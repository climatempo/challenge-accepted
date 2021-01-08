export interface ILocale {
  id: number;
  name: string;
  state: string;
  latitude: number;
  longitude: number;
}

export interface IWeather {
  period: {
    begin: string;
    end: string;
  };
  locale: ILocale;
  weather: {
    date: string;
    text: string;
    temperature: {
      min: number;
      max: number;
    };
    rain: {
      probability: number;
      precipitation: number;
    };
  }[];
}
