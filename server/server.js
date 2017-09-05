// dependencias http
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// rotas
const api = require('./routes/api');


// init
const app = express();
const cors = require('cors');

// set cors (apenas dev!)
app.use(cors());

// serializacao
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// static stuff -> dist (onde reside nossa app angular)
app.use(express.static(path.join(__dirname, 'dist')));

// api
app.use('/api', api);

// direcionar tudo que nao for api p/ a app angular
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// porta (default 4199)
const port = process.env.PORT || '4199';
app.set('port', port);

// bootstrap servidor
const server = http.createServer(app);

// recebe requisicoes
server.listen(port, () => console.log(`Cimatempo Weather API listening @ localhost:${port}`));
