const express = require("express");
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');


app.use(express.json({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//----------------------------

const readFileLocales = () => {
    const content = fs.readFileSync('./base/locales.json', 'utf-8');
    return JSON.parse(content);
}

const readFileWeather = () => {
    const content = fs.readFileSync('./base/weather.json', 'utf-8');
    return JSON.parse(content);
}

router.post('/pesquisa', (req, res) => {

    const name = req.body.valor;
    const locales = readFileLocales();
    const vetweather = [];
    let resultado = "false";
    const locale = "";

    for (var i = 0; i < locales.length; i++) {

        if (locales[i].name.toUpperCase() == name.toUpperCase()) {
            resultado = "true";
            const id = locales[i].id;
            const weather = readFileWeather();

            for (var j = 0; j < weather.length; j++) {
                if (weather[j].locale.id == id) {
                    vetweather.push(weather[j].locale);
                    for (var k = 0; k < weather[j].weather.length; k++) {
                        vetweather.push(weather[j].weather[k]);
                    }
                }
            }

        }
        
    }

    if (resultado == "true") {
        res.send(vetweather);
    } else {
        res.send(resultado);
    }

});

router.get('/', (req, res) => {

    res.sendFile(path.join(__dirname + '/index.html'));

});

app.use(router);

app.listen(3000, () => {
    console.log("RODANDO SERVIDOR");
});