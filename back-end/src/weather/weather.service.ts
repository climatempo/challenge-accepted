import { Injectable, NotFoundException } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { FullWeather } from './entities/full-weather.entity';

@Injectable()
export class WeatherService {

  findAll() {
    const _weather = JSON.parse(readFileSync(join(__dirname, '../', 'data/base', 'weather.json'), "utf8"))
    if (!_weather) {
      throw new NotFoundException("Nenhum registro foi encontrado")
    }
    return _weather
  }

  findByLocaleNameOrId(name: string, id: number, temperatureUnit: string, rainUnit: string): FullWeather | string {
    const _weather = JSON.parse(readFileSync(join(__dirname, '../', 'data/base', 'weather.json'), "utf8"))
    if (id) {
      var resultWeather: FullWeather = _weather.find(fullWeather => fullWeather.locale.id == id)
    }

    if (name) {
      var resultWeather: FullWeather = _weather.find(fullWeather => fullWeather.locale.name.toLowerCase().includes(name))
    }

    if (temperatureUnit === "f") {
      resultWeather.weather.forEach((weather, index) => {
        resultWeather.weather[index].temperature.min = Math.floor((weather.temperature.min * 9 / 5) + 32)
        resultWeather.weather[index].temperature.max = Math.floor((weather.temperature.max * 9 / 5) + 32)
      })

    }

    if (rainUnit === "inch") {
      resultWeather.weather.forEach(weather => {
        const rain = parseFloat((weather.rain.precipitation / 25.4).toFixed(2))
        weather.rain.precipitation = rain
      })
    }

    if (resultWeather) {
      return resultWeather
    } else {
      throw new NotFoundException("Nenhum registro foi encontrado")
    }

  }

}
