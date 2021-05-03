const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  period: {
    begin: {
      type: String,
      required: true
    },
    end: {
      type: String,
      required: true
    }
  },
  locale_id: {
    type: Schema.Types.ObjectId,
    ref: 'Locale'
  },
  weather: [
    {
      date: {
        type: String,
      },
      text: {
        type: String,
      },
      temperature: {
        min: {
          type: Number,
        },
        max: {
          type: Number
        }
      },
      rain: {
        probability: {
          type: Number
        },
        precipitation: {
          type: Number
        }
      }
    }
  ]
});

module.exports = mongoose.model('Weather', weatherSchema);