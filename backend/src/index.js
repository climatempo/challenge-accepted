const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.port || 5000;
const pathBase = "/api/v1";
const controller = require("./controller");

app.use(cors());

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
    try {
      controller.WeatherController.findByID(parseInt(id))
        .then(result => {
          res.json(result);
        })
        .catch(error => {
          res.status(500).send(error);
        });
    } catch (e) {
      res.status(400).send('O "id" precisa se um número');
    }
  }
});

app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}`);
});
