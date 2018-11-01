let express = require('express');
let app = express();
let fs = require("fs");
let locales = fs.readFileSync("./base/locales.json");
let weather = fs.readFileSync("./base/weather.json");

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/locales', function (req, res) {
  let localesArr = JSON.parse(locales.toString());
  let data = localesArr.filter((locale) =>  locale.name.toLowerCase().includes(req.body.search.toLowerCase()));
  res.json({data: data});
});


app.get('/weather/:cityid', function (req, res) {
  let weatherarr = JSON.parse(weather.toString());
  let data = weatherarr.filter((weathers) =>  weathers.locale.id == req.params.cityid);
  res.json(data);
});


app.listen(4000, function () {
  console.log('Running in 4000');
});