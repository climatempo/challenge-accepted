import http from 'http';
import express from 'express';
import path from 'path';
import apiRoutes from './apiRoutes';
import React from 'react';
import { renderToString } from 'react-dom/server';
import {AppContainer} from './components/App';
import configureStore from './configureStore';
import {Provider} from 'react-redux';

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

app.use(express.static('dist'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/api', apiRoutes);
app.get('/', function (req, res) {
	const clientStore = configureStore();
  const appString = renderToString(<Provider store={clientStore}><AppContainer /></Provider>);
  res.render('index', { markup: appString });
});

server.listen(PORT, function() {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = server