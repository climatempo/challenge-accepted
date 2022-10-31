export type Locale = {
  id: number;
  name: string;
  state: string;
  latitude: number;
  longitude: number;
};

export type Weather = {
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
};
