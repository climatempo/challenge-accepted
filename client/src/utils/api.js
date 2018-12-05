const axios = require("axios");
const querystring = require("querystring");
let baseURL = "localhost:5000"; // usando localhost

const instance = axios.create({
  baseURL: `http://${baseURL}/api/v1/`
});

/**
 * Pegar as informações do local pela api
 *
 * @param {String} name - nome do local
 */
export async function getLocale(name) {
  return instance.get("locale?" + querystring.stringify({ name }));
}

/**
 * Pegar as informações de tempo de um local pelo id
 *
 * @param {String} id - id do local
 */
export async function getWeather(id) {
  return instance.get("weather?" + querystring.stringify({ id }));
}
