var express = require("express");
var app = express();
var localesJSON = require("./base/locales.json");
var weatherJSON = require("./base/weather.json");

// Aplica CORS na API
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Rota para retornar o clima de uma cidade
app.get("/weather/:locale", function(req, res) {
  // Decodifica o parametro 'locale' para leitura
  var localeSearch = decodeURI(req.params.locale).trim();

  // Filtra os dados de local baseado no 'locale'
  const filteredLocale = localesJSON.filter(locale => {
    return locale.name.toLowerCase().includes(localeSearch.toLowerCase());
  });

  // Filtra os dados de Clima baseado na cidade encontrada com o 'locale'
  var filteredWeather = weatherJSON.filter(weather => {
    return weather.locale.id === filteredLocale[0].id;
  });

  // Retorna somente o clima filtrado
  res.json(filteredWeather);
});

app.listen(3050, function() {
  console.log("API listening on http://localhost:3050!");
});
