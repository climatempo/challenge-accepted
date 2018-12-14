import ParseFile from '../services/parseFile';
import GlobalConfig from '../configs/config';
import Format from '../services/format';

class WeatherController {

    async get(req, res) {
        try {
            let weathers = await this.getWeathers();
            res.json({
                data: weathers
            });
        } catch (er) {
            res.json({
                error: er.message
            });
        }
    }

    async getByName(req, res) {
        try {
            let weather = await this.getWeather(req.params.name);
            res.json({
                data: weather
            });
        } catch (er) {
            res.json({
                error: er.message
            });
        }
    }

    /**
     * Retorna todas as previsoes
     */
    async getWeathers() {
        try {
            let data = await ParseFile.getFileContent(GlobalConfig.FILE_WEATHER);
            return ParseFile.parseData(data);
        } catch (err) {
            return err.message;
        }
    }

    /**
     * Retorna previsao da cidade {localName}
     * @param {String} localeName 
     */
    async getWeather(localeName) {
        let weathers = await this.getWeathers();

        for (let weather of weathers) {
            if (Format.clearText(weather.locale.name) === Format.clearText(localeName))
                return weather;
        }

        return {};
    }
}

export default WeatherController;