import { Locale } from "./locale";
import { Weather } from "./weather";

export interface Forecast {
  period: {
    begin: Date;
    end: Date;
  };
  locale: Locale;
  weather: Weather[];
}
