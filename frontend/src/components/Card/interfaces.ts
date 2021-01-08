export interface IWeather {
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
}

export interface CardStyleProps {
  color: "max" | "min" | "default";
}
