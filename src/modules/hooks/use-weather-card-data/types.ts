export type WeatherData = {
  date: string;
  text: string;
  temperature: {
    min: number;
    max: number;
  };
  rain: {
    probability: number;
    precipitation: string | number;
  };
};

export type Temperature = {
  min: string | number;
  max: string | number;
};

export type Precipitation = number | string;
