type InstantWeatherModel = {
    idlocale: number,
    temperature: number,
    icon: string,
    condition: string,
    humidity: number,
    sensation: number,
    windVelocity: number,
    pressure: number,
    date: string
}

export default InstantWeatherModel;