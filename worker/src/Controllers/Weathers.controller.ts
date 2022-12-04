import ClimaTempoEngine from '../Engines/ClimaTempo/ClimaTempo.engine';
import DailyWeatherModel from '../Models/DailyWeather.model';

function WeathersController(idCity: string): Promise<DailyWeatherModel[]> {
  const code = Number(idCity) > 0 ? Number(idCity) : 0;

  if(!code)
    return Promise.reject(400);

  return new ClimaTempoEngine().detailedWeatherCollectionByCityCode(code);
}

export default WeathersController;