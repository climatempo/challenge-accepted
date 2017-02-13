/**
 * Created by gusanthiago on 2/12/17.
 */
/**
 *  Gerencia as requisições de previsao para cidade
 */
import { Simple } from 'meteor/simple:rest';

/**
 * File System node lib
 */
const fs = Npm.require("fs");

/**
 * Lista as cidades com o nome proximo a esse
 * @param {String} str
 */
JsonRoutes.add('GET', '/cities/:str', (req, res) => {
	let weather = JSON.parse(fs.readFileSync('../web.browser/app/base/weather.json', 'utf8')),
			dataResp = [],
			strSearch = req.params.str;

	weather.map((index) => {
		let indexSt = (index.locale.name + index.locale.state).toLowerCase();
		if (indexSt.search(strSearch.toLowerCase().trim()) != -1) {
			dataResp.push(index);
		}
	});
	JsonRoutes.sendResult(res, { data: { response: dataResp } });
});

/**
 * Lista a previsão das cidades
 */
JsonRoutes.add('GET', '/cities/', (req, res) => {
	let weather = JSON.parse(fs.readFileSync("../web.browser/app/base/weather.json", "utf8"));
	JsonRoutes.sendResult(res, { data: { response: weather } });
});
