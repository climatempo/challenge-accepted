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

export const toElastic = (weather: DailyWeatherModel) => ({
    idcity: weather.idcity,
    moon: weather.moon,
    rainbow: weather.rainbow,
    description: weather.description,
    date: weather.date,
    'temperature-min': weather.temperature.min,
    'temperature-max': weather.temperature.max,
    'rain-precipitation': weather.rain.precipitation,
    'rain-probability': weather.rain.probability,
    'wind-compass': weather.wind.compass,
    'wind-velocity': weather.wind.velocity,
    'humidity-min': weather.humidity.min,
    'humidity-max': weather.humidity.max,
    'sun-morning': weather.sun.morning,
    'sun-afternoon': weather.sun.afternoon
});

export const ofElastic = (weather: any) => ({
    idcity: weather.idcity,
    moon: weather.moon,
    rainbow: weather.rainbow,
    description: weather.description,
    date: weather.date,
    temperature: {
        min: weather['temperature-min'],
        max: weather['temperature-max']
    },
    rain: {
        precipitation: weather['rain-precipitation'],
        probability: weather['rain-probability']
    },
    wind: {
        compass: weather['wind-compass'],
        velocity: weather['wind-velocity']
    },
    humidity: {
        min: weather['humidity-min'],
        max: weather['humidity-max']
    },
    sun: {
        morning: weather['sun-morning'],
        afternoon: weather['sun-afternoon']
    }
} as DailyWeatherModel);

export default DailyWeatherModel;