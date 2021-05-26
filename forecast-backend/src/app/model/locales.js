const mongoose = require('mongoose');

const LocalesSchema = new mongoose.Schema(
    {
        id: Number,
        name: String,
        state: String,
        latitude: Number,
        longitude: Number
    }
);

module.exports = mongoose.model('locales', LocalesSchema);