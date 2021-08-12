export interface ILocale {
    id?: number
    name?: string
    state?: string
    latitude?: number
    longitude?: number
}

export interface IPeriod {
    begin: string
    end: string
}


export type ITemperature = {
    min: number
    max: number
}

export type IRain = {
    probability: number
    precipitation: number
}

export interface IWeather {
    date?: string
    text?: string
    temperature?: ITemperature
    rain?: IRain
}

export interface IFullWeatherInfo {
    weather: IWeather[]
    period: IPeriod
    locale: ILocale
}