export interface ILocale {
  id: number;
  name: string;
  state: string;
  longitude: number;
  latitude: number;
}

export interface IWeather {
  period: {
    begin: "string";
    end: "string";
  };
  locale: ILocale;
  weather: Array<{
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
  }>;
}
