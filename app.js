var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.render('pages/index');
});

app.get('/omito', function (req, res) {
  res.render('pages/mito');
});

app.listen(3000, function() {
  console.log("Rodando em localhost:3000");
});
