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
            res.status(500).json({
                error: er.message
            });
        }
    }

    async getByName(req, res) {
        try {
            const {
                name
            } = req.params;

            let weather = await this.getWeather(name);

            if (weather.locale) {
                res.json({
                    data: weather
                });
            } else {
                res.status(400).json({ error: 'Cidade não encontrada.' });
            }
        } catch (er) {
            res.status(500).json({
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

        const i = weathers.findIndex(el => Format.clearText(el.locale.name) === Format.clearText(localeName));

        if (i !== -1)
            return weathers[i];

        return {};
    }
}

export default WeatherController;