var mongoose = require("mongoose");

var LocaleSchema = new mongoose.Schema({
  id : Number,
  nome : String,
  state : String,
  latitude : Number,
  longitude : Number
})

var Locale = mongoose.model("Locale", LocaleSchema);
module.exports = Locale;