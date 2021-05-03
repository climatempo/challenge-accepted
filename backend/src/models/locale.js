
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const localeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('Locale', localeSchema);