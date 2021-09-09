var mongoose = require("mongoose");

var WeatherSchema = new mongoose.Schema({
  period : {
    begin : Date,
    end : Date
  },
  locale : {
    id : Number,
    name : String,
    state : String,
    latitude : Number,
    longitude : Number
  },
  weather : Object
}, {collation : {locale : 'pt', strength : 1}})
WeatherSchema.set('collection', 'weather');
var Weather = mongoose.model("Weather", WeatherSchema);
module.exports = Weather;