import { Router } from "express";
const weatherRouter = Router();
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./src/base/weather.json");

const db = lowdb(adapter);

// http://localhost:3333/weather/city/Osasco
weatherRouter.get("/city/:name", (request, response) => {
  const city = request.params.name;
  const data = db
    .find({
      locale: {
        name: city,
      },
    })
    .value();

  response.send(data);
});

export default weatherRouter;
