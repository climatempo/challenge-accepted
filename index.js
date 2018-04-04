/**
 * Criado por Diego Hideky em 30/08/2017
 * Email: <diegohideky@gmail.com>
 *
 * Node Express para gerenciar rotas
 */

var express = require('express');
var app = express();
var path = require('path');
const port = process.env.PORT || 8081;

app.use(express.static(path.join(__dirname + '/app')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, function () {
  console.log("Escutando na porta: " + port);
});
