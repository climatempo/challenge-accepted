import forecast from './weather.json'

export default {
    Query: {
        forecastAll: () => {
            const array = []

            forecast.map(f => {
                const per = f.period
                const loc = f.locale
                const wea = f.weather
                const weaArray = []

                const periodBegin = per.begin.split('-')
                const periodEnd = per.end.split('-')

                wea.map(w => {
                    const splittedDate = w.date.split('-')
                    const res = {
                        date: `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`,
                        text: w.text,
                        minTemperatureC: w.temperature.min,
                        maxTemperatureC: w.temperature.max,
                        minTemperatureF: ((w.temperature.min * 1.8) + 32).toFixed(1),
                        maxTemperatureF: ((w.temperature.max * 1.8) + 32).toFixed(1),
                        rainProbability: w.rain.probability,
                        rainPrecipitationMM: w.rain.precipitation,
                        rainPrecipitationInch: (w.rain.precipitation / 25.4).toFixed(2),
                    }
                    weaArray.push(res)
                })

                const res = {
                    period: {
                        begin: `${periodBegin[2]}/${periodBegin[1]}/${periodBegin[0]}`,
                        end: `${periodEnd[2]}/${periodEnd[1]}/${periodEnd[0]}`,
                    },
                    locale: {
                        id: loc.id,
                        name: loc.name,
                        state: loc.state,
                        latitude: loc.latitude,
                        longitude: loc.longitude,
                    },
                    weather: weaArray,
                }

                array.push(res)
            })

            return array
        },

        forecast: (_, { locale }) => {
            let result = null

            forecast.map(f => {
                if (f.locale.name.toLowerCase() === locale.toLowerCase()) {
                    const per = f.period
                    const loc = f.locale
                    const wea = f.weather
                    const weaArray = []

                    const periodBegin = per.begin.split('-')
                    const periodEnd = per.end.split('-')

                    wea.map(w => {
                        let splittedDate = w.date.split('-')
                        const res = {
                            date: `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`,
                            text: w.text,
                            minTemperatureC: w.temperature.min,
                            maxTemperatureC: w.temperature.max,
                            minTemperatureF: ((w.temperature.min * 1.8) + 32).toFixed(1),
                            maxTemperatureF: ((w.temperature.max * 1.8) + 32).toFixed(1),
                            rainProbability: w.rain.probability,
                            rainPrecipitationMM: w.rain.precipitation,
                            rainPrecipitationInch: (w.rain.precipitation / 25.4).toFixed(2),
                        }
                        weaArray.push(res)
                    })

                    const res = {
                        period: {
                            begin: `${periodBegin[2]}/${periodBegin[1]}/${periodBegin[0]}`,
                            end: `${periodEnd[2]}/${periodEnd[1]}/${periodEnd[0]}`,
                        },
                        locale: {
                            id: loc.id,
                            name: loc.name,
                            state: loc.state,
                            latitude: loc.latitude,
                            longitude: loc.longitude,
                        },
                        weather: weaArray,
                    }

                    result = res
                }
            })

            if (!result) result = { message: `Cidade "${locale}" não encontrada.` }

            return result
        },
    }
}