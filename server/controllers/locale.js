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

            let locale = await this.getLocale(name);

            if (locale.id) {
                res.json({
                    data: locale
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

        const i = locales.findIndex(el => Format.clearText(el.name) === Format.clearText(name));

        if (i !== -1)
            return locales[i];

        return {};
    }
}

export default LocaleController;