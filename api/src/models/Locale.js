const { Schema, model } = require("mongoose");
const mongoosastic = require("mongoosastic");

const LocaleSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      es_indexed: true,
    },
    name: {
      type: String,
      required: true,
      es_indexed: true,
    },
    state: {
      type: String,
      required: true,
      es_indexed: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

LocaleSchema.plugin(mongoosastic);

module.exports = model("Locale", LocaleSchema);
