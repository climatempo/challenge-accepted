const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema(
    {
        period: {
            begin: String,
            end: String
        },
        locale: {
            id: Number,
            name: String,
            state: String,
            latitude: Number,
            longitude: Number
        },
        weather: [
            {
                date: String,
                text: String,
                temperature: {
                    min: Number,
                    max: Number
                },
                rain: {
                    probability: Number,
                    precipitation: Number
                }
            }
        ]
    }
);

module.exports = mongoose.model('weather', WeatherSchema, 'weather');