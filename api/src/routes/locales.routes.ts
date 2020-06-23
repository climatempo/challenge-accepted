import { Router } from "express";
const localesRouter = Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("../base/locales.json");
const db = low(adapter);

// http://localhost:3333/locales/city/Osasco
localesRouter.get("/city/:name", (request, response) => {
  const nameCity = request.params.name;
  const data = db
    .find({
      name: nameCity,
    })
    .value();

  response.send(data);
});

// http://localhost:3333/locales/all
localesRouter.get("/all", (request, response) => {
  const data = JSON.stringify(db);

  response.send(data);
});

export default localesRouter;
