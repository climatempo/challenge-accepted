import { Injectable } from '@nestjs/common'
import * as weathers from './weather.json'

@Injectable()
export class WeatherService {

  public async getAllWeather() {
    return weathers
  }

  public async getWeatherById(id: number) {

    const fillteredWeathers = weathers.filter(val => {
      return val.locale.id == id
    })

    return fillteredWeathers
  }

}
