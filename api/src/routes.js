const express = require('express');
const json = require('../db.json');

const routes = express.Router();

routes.get('/weather', (req, resp) => {
	const { q } = req.query;

	let result = json.weather;
	if (q)
		result = result.filter(item =>
			item.locale.name.toLowerCase().includes(q.toLowerCase())
		);

	resp.json(result);
});

module.exports = routes;
