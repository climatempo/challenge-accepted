module.exports = (() => {

    const Database = require('../../../database/loadData');
    const GlobalHelper = require('../../../common/helpers/globalHelper');

    async function getData() {
        return await Database.getData('base/locales.json');
    }

    async function getLocale(locale) {
        try {
            let data = await getData();
            return data.filter(value => {
                return GlobalHelper.removeDiacritics(value.name.toLowerCase()).includes(GlobalHelper.removeDiacritics(locale.toLowerCase()))
            });
        } catch(err) {
            throw err;
        }

    }

    return {
        getLocale: getLocale,
    };

})();
