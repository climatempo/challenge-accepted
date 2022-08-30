import { ILocale } from "./Locale";

export interface IWeather {
    period: {
        begin: string,
        end: string
    },
    locale: ILocale,
    weather: Weather[]
};

type Weather = {
    date: string,
    text: string,
    temperature: {
        min: number,
        max: number
    },
    rain: {
        probability: number,
        precipitation: number
    }
};