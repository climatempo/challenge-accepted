const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  period: {
    begin: {
      type: Date,
      required: true
    },
    end: {
      type: Date,
      required: true
    }
  },
  locale: {
    type: Schema.Types.ObjectId,
    ref: 'Locale'
  },
  weather: [
    {
      date: {
        type: Date,
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