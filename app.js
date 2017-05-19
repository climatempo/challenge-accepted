var express = require('express');
const request = require('supertest');
var path = require("path");
var fs = require('fs');

var app = express();

function readJSONFile(filename, callback) {
    fs.readFile(filename, function (err, data) {
        if (err) {
            callback(err);
            return;
        }
        try {
            callback(null, JSON.parse(data));
        } catch (exception) {
            callback(exception);
        }
    });
}

app.use("/static", express.static(__dirname + '/static'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api/locales', function (req, res) {
    readJSONFile(path.join(__dirname + '/base/locales.json'), function (err, json) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(json));
    });
});

app.get('/api/weather/:localeId', function (req, res) {
    readJSONFile(path.join(__dirname + '/base/weather.json'), function (err, json) {
        responseWeather = null;
        for (var i in json){
            var weather = json[i];
            if (weather.locale.id == parseInt(req.params.localeId)){
                responseWeather = weather;
            }
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(responseWeather));
    });
});

request(app)
  .get('/')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });

request(app)
  .get('/api/locales')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });

request(app)
  .get('/api/weather/3477')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});