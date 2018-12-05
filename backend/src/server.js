const express = require("express");
const cors = require("cors");

const app = express();
const pathBase = "/api/v1";
const controller = require("./controller");

app.use(cors());

app.get("/", (req, res) => {
  res.send("API V1");
});

app.get(`${pathBase}/locale?:name`, (req, res) => {
  const { name } = req.query;

  if (name === null) {
    // request não contém o campo "name"
    res.status(400).send('A request não contém o parâmetro "name"');
  } else {
    controller.LocaleController.findByName(name)
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  }
});

app.get(`${pathBase}/weather?:id`, (req, res) => {
  const { id } = req.query;

  if (id === null) {
    // request não contém o campo "id"
    res.status(400).send('A request não contém o parâmetro "id"');
  } else {
    let numberId = parseInt(id);
    if (numberId) {
      controller.WeatherController.findByID(numberId)
        .then(result => {
          res.json(result);
        })
        .catch(error => {
          res.status(500).send(error);
        });
    } else {
      res.status(400).send('O "id" precisa se um número');
    }
  }
});

module.exports = app;
