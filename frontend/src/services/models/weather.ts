export interface Weather {
  date: Date;
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
