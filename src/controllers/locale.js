import ParseFile from '../services/parseFile';
import GlobalConfig from '../configs/config';
import Format from '../services/format';

class LocaleController {

    async get(req, res) {
        try {
            let locales = await this.getLocales();
            res.json({
                data: locales
            });
        } catch (er) {
            res.json({
                error: er.message
            });
        }
    }

    async getByName(req, res) {
        try {
            let locale = await this.getLocale(req.params.name);
            res.json({
                data: locale
            });
        } catch (er) {
            res.json({
                error: er.message
            });
        }
    }

    /**
     * Retorna todas as cidades
     */
    async getLocales() {
        try {
            let data = await ParseFile.getFileContent(GlobalConfig.FILE_LOCALES);
            return ParseFile.parseData(data);
        } catch (err) {
            return err.message
        }
    }

    /**
     * Retorna cidade com nome {name}
     * @param {String} name 
     */
    async getLocale(name) {
        let locales = await this.getLocales();

        for (let locale of locales) {
            if (Format.clearText(locale.name) === Format.clearText(name))
                return locale;
        }

        return {};
    }
}

export default LocaleController;