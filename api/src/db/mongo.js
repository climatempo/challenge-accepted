const mongoose = require("mongoose");

const mongoUsername = "climatempo";
const mongoPassword = "WnWz5AF9CsuGeZ2h";
const connectionString =
  `mongodb+srv://${mongoUsername}:${mongoPassword}@climatempo.hmxnh.mongodb.net` +
  "/myFirstDatabase?retryWrites=true&w=majority";

module.exports = {
  async connect() {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  },
  async disconnect() {
    await mongoose.disconnect();
  },
};
