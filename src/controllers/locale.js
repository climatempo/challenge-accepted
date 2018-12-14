import ParseFile from '../services/parseFile';

class LocaleController {

    constructor(Locale) {
        this.Locale = Locale;
    }

    async get(req, res) {
        try {
            let locales = await ParseFile.getLocales();
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
            let locale = await ParseFile.getLocale(req.params.nome);
            res.json({
                data: locale
            });
        } catch (er) {
            res.json({
                error: er.message
            });
        }
    }

    testar() {
        console.log('a');
    }
}

export default LocaleController;