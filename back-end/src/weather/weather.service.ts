import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { FullWeather } from './entities/full-weather.entity';
import { Weather } from './entities/weather.entity';

@Injectable()
export class WeatherService {

  private _weather: FullWeather[];
  constructor() {
    const weatherJson = readFileSync(join(__dirname, '../', 'data/base', 'weather.json'), "utf8")
    this._weather = <FullWeather[]>JSON.parse(weatherJson)
  }

  findAll() {
    return this._weather
  }

  findByLocaleNameOrId(name: string, id: number) {
    let weather;

    if (id) {
      weather = this._weather.find(fullWeather => fullWeather.locale.id == id)
      if (weather) {
        return weather
      }
    }

    if (name) {
      weather = this._weather.find(fullWeather => fullWeather.locale.name.toLowerCase().includes(name))
      if (weather) {
        return weather
      }
    }

    return 'Nenhum registro encontrado'
  }

}
