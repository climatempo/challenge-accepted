/**
 * Created by gusanthiago on 2/13/17.
 */
/**
 * Define os testes feitos em jsons for sytem
 */
import { assert } from 'meteor/practicalmeteor:chai';

/**
 * Verifica se existe dados para buscar
 */
describe('JSON file', () => {
	/**
	 * Verifica se o arquivo onde é buscado os dados de previsão existe
	 */
	let weather = [];
	it('Carregamento de previsão correto em weather.json', () => {
		weather = require("../../public/base/weather.json") !== [];
		assert.equal(true, weather);
	});
});