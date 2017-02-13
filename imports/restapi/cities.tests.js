/**
 * Created by gusanthiago on 2/13/17.
 */
/**
 * Define os testes feitos em jsons for sytem
 */
import { assert } from 'meteor/practicalmeteor:chai';
import { $ } from 'meteor/jquery';

/**
 * File System lib
 */
const fs = Npm.require("fs");

/**
 * Verifica se existe dados para buscar
 */
describe('JSON file', () => {
	/**
	 * Verifica se o arquivo onde é buscado os dados de previsão existe
	 */
	let weather = [];
	weather = JSON.parse(fs.readFileSync('../web.browser/app/base/weather.json', 'utf8')) !== [];
	it('Carregamento de previsão correto em weather.json', () => {
		assert.equal(true, weather);
	});
});