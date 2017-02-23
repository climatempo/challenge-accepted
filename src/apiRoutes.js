import { Router } from 'express';
import weather from '../base/weather.json';

const router = new Router();

router.get("/weather/:name", function(req, res) {
	if (!req.params.name) res.status(400).send({message: "Empty city"});
	const cleanName = req.params.name.split("+").join(" ").toLowerCase();

	const filteredWeather = weather.filter((data) => {
		return data.locale.name.split("+").join(" ").toLowerCase() === cleanName;
	})

	if (filteredWeather.length > 0) {
		res.json(filteredWeather[0]);
	} else {
		res.status(404).send({message: "City not found!"});
	}
});

export default router;