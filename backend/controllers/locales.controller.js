const locales = require('../base/locales.json');

/**Rotina para busca de locais por ID */
exports.getLocalesById = async (req, res) => {
    try{
        let locale = await locales.filter(item => item.id == req.body.locale_id);
        res.send(locale);
    }
    catch(error){
        res.status(404).send('Ocorreu um erro ao buscar locais.');
    }
}

/**Rotina para busca de locais  */
exports.getLocales = async (req, res) => {
    try{        
        res.send(locale);
    }
    catch(error){
        res.status(404).send('Ocorreu um erro ao buscar locais.');
    }
}