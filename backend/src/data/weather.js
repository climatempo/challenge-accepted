const path = require("path");
const db = require("./DB");

/** Classe para acessar os dados dos climas */
class weatherDAO {
  /**
   * Buscar o clima pelo pelo id do local
   *
   * @param {String} localeID - id do local
   * @returns {Promise}
   */
  findByID(localeID) {
    return new Promise((resolve, reject) => {
      // pegar os dados
      db(path.join("..", "base", "weather.json"))
        .then(data => {
          // buscar o local nos dados
          let index = data.findIndex(weather => weather.locale.id === localeID);

          // verificar se achou o id
          if (index !== -1) {
            // retorna o dado
            resolve(data[index]);
          } else {
            // se não encontrou, retorna vazio
            resolve({});
          }
        })
        .catch(reject);
    });
  }
}

module.exports = weatherDAO;
