const { Schema, model } = require('mongoose');

const WeatherSchema = new Schema({
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
        ref: 'Locale',
        required: true
    },
    weather: [
        {
            date: {
                type: Date,
                required: true
            },
            text: {
                type: String,
                required: true
            },
            temperature: {
                min: {
                    type: Number,
                    required: true
                },
                max: {
                    type: Number,
                    required: true
                }
            },
            rain: {
                probability: {
                    type: Number,
                    required: true
                },
                precipitation: {
                    type: Number,
                    required: true
                }
            }
        }
    ]
}, { timestamps: true });

module.exports = model('Weather', WeatherSchema)