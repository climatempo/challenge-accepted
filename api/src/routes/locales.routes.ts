import { Router } from "express";
const localesRouter = Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("../base/locales.json");
const db = low(adapter);

localesRouter.get("/", (request, response) => {
  const city = db.find({ id: 3735 }).value();

  response.send(city);
});

export default localesRouter;
