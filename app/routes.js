module.exports = function(app) {

    app.get('/api/climatempo/locales', function(req, res) {
        var locales = require('../base/locales.json');
        var query = [];

        var re = new RegExp(req.query.search, "gi");

        for (var i = 0; i <= locales.length - 1; i++) {
            if (re.test(stripVowelAccent(locales[i].name))) {
                query.push(locales[i]);
            }
        }

        res.json(query);
    });

    app.get('/api/climatempo/weather/:id', function(req, res) {
        var weather = require('../base/weather.json');

        for (var i = 0; i <= weather.length - 1; i++) {
            console.info(weather[i].locale.id, req.params.id);
            if (weather[i].locale.id === parseInt(req.params.id)) {
                res.json(weather[i]);
            }
        }

        res.json({});
    });

    function stripVowelAccent(str) {
        var rExps = [
            { re: /[\xC0-\xC6]/g, ch: 'A' },
            { re: /[\xE0-\xE6]/g, ch: 'a' },
            { re: /[\xC8-\xCB]/g, ch: 'E' },
            { re: /[\xE8-\xEB]/g, ch: 'e' },
            { re: /[\xCC-\xCF]/g, ch: 'I' },
            { re: /[\xEC-\xEF]/g, ch: 'i' },
            { re: /[\xD2-\xD6]/g, ch: 'O' },
            { re: /[\xF2-\xF6]/g, ch: 'o' },
            { re: /[\xD9-\xDC]/g, ch: 'U' },
            { re: /[\xF9-\xFC]/g, ch: 'u' },
            { re: /[\xD1]/g, ch: 'N' },
            { re: /[\xF1]/g, ch: 'n' }
        ];

        for (var i = 0, len = rExps.length; i < len; i++)
            str = str.replace(rExps[i].re, rExps[i].ch);

        return str;
    }

};