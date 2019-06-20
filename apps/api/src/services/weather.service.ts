import { Weather } from '@climatempo/api-interface';
import { weather } from '@climatempo/base';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherService {
    public async getByLocaleId(localeId: number): Promise<Weather[]> {
        const weatherData = weather.find(w => w.locale.id === localeId);

        if (!weatherData) {
            return null;
        }

        return weatherData.weather.map(w => {
            return {
                ...w,
                rain: {
                    precipitation: +w.rain.precipitation, // alguns dados estão como string, padronizando o retorno da api
                    probability: w.rain.probability
                }
            };
        });
    }
}
