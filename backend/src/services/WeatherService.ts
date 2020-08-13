import { Context } from "../Context";
import { NotFoundError } from "../errors";
import fileManager from "../helpers/FileManager";
import { IWeather } from "../types";

class WeatherService {
  /**
   * Import file content to database
   *
   * @memberof WeatherService
   */
  async importFileContentToDatabase() {
    const { PATH_WEATHER_JSON } = process.env;

    const weathersJsonContent = await fileManager.getJsonFromFile<IWeather[]>(PATH_WEATHER_JSON!);

    console.log("\nImportando climas...");

    for (const objWeatherJsonContent of weathersJsonContent) {
      const locale = await Context.getInstance().db.locales.findOne({
        where: {
          identification: objWeatherJsonContent.locale.id,
        },
      });

      if (!locale) {
        throw new NotFoundError(`Locale Id: ${objWeatherJsonContent.locale.id} não encontrado na base de dados`);
      }

      console.log(`\nCidade: ${locale.identification} - ${locale.name}`);

      for (const weather of objWeatherJsonContent.weather) {
        try {
          await Context.getInstance().db.weathers.save({
            date: weather.date,
            localeId: locale.id,
            rainPrecipitation: weather.rain.precipitation,
            rainProbability: weather.rain.probability,
            temperatureMax: weather.temperature.max,
            temperatureMin: weather.temperature.min,
            text: weather.text,
          });

          console.log(`${weather.date}: OK`);
        } catch (err) {
          if (err.routine === "_bt_check_unique") {
            console.error(`${weather.date} já inserido na base de dados.`);
          } else {
            console.error(err);
            throw err;
          }
        }
      }
    }
  }
}
export default new WeatherService();
