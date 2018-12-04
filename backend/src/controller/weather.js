const WeatherDAO = require("../data").WeatherDAO;
const weatherDAO = new WeatherDAO();

/** Controller para buscar o clima na base de dados */
class WeatherController {
  /**
   * Buscar o clima do local pelo ID
   *
   * @param {Number} localeID - ID do local
   */
  static async findByID(localeID) {
    return new Promise((resolve, reject) => {
      if (localeID !== "") {
        // buscar na base de dados
        weatherDAO
          .findByID(localeID)
          .then(result => {
            resolve(result);
          })
          .catch(error => {
            reject(error);
          });
      } else {
        // id vazio
        reject({});
      }
    });
  }
}

module.exports = WeatherController;
