type DailyWeatherModel = {
    idcity: number,
    moon: string[],
    rainbow: string,
    description: string,
    date: string,
    temperature: {
        min: number,
        max: number
    },
    rain: {
        precipitation: number,
        probability: number
    },
    wind: {
        compass: string,
        velocity: number
    },
    humidity: {
        min: number,
        max: number
    },
    sun: {
        morning: string,
        afternoon: string
    }
}

export default DailyWeatherModel;