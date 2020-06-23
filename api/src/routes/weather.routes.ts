import { Router } from "express";
const weatherRouter = Router();
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("../base/weather.json");
const db = lowdb(adapter);

weatherRouter.get("/:state", (request, response) => {
  const state = request.params.state;
  const post = db
    .find({
      locale: {
        state: state,
      },
    })
    .value();

  response.send(post);
});

export default weatherRouter;
