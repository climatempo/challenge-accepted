import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

//init express
var app = express();
var http = require('http').createServer(app)

//express middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//init server
const port = 3001;

const server = app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

export default app;