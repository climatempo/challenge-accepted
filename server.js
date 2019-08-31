/* eslint-disable no-console */
/* eslint-disable arrow-parens */
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const next = require("next");

const api = require("./API");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(cors()); // { origin: "https://fretesbrasil.herokuapp.com" }
  server.use(bodyParser.urlencoded({ extended: false }));

  server.use("/api", api);
  server.get("*", (req, res) => handle(req, res));
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
