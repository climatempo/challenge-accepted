import http from 'http';
import express from 'express';
import path from 'path';
import apiRoutes from './apiRoutes';

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/api', apiRoutes);
app.get('/', function (req, res) {
  res.render('index');
});

server.listen(PORT, function() {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = server