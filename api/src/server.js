const express = require("express");
const cors = require("cors");

const routes = require("./routes");
const Db = require("./db/mongo");

Db.connect();

const app = express();
const server = require("http").Server(app);
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(port);
console.log(`Server listening on port ${port}`);
