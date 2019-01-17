var express = require("express");
var app = express();
var localesJSON = require("./base/locales.json");
var weatherJSON = require("./base/weather.json");

// Aplica CORS na API
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Rota para retornar o clima de uma cidade
app.get("/weather/:locale", function(req, res) {
  var localeSearch = decodeURI(req.params.locale).trim();

  const filteredLocale = localesJSON.filter(locale => {
    return locale.name.toLowerCase().includes(localeSearch.toLowerCase());
  });

  var filteredWeather = weatherJSON.filter(weather => {
    return weather.locale.id === filteredLocale[0].id;
  });

  res.json(filteredWeather);
});

app.listen(3050, function() {
  console.log("API listening on http://localhost:3050!");
});
