const path = require("path");
const db = require("./DB");

/** Classe para acessar os dados dos locais */
class LocaleDAO {
  /**
   * Buscar um local pelo nome
   *
   * @param {String} name - nome do local
   * @returns {Promise}
   */
  findByName(name) {
    return new Promise((resolve, reject) => {
      // pegar os dados
      db(path.join("..", "base", "locales.json"))
        .then(data => {
          // buscar o nome nos dados
          let index = data.findIndex(
            locale => locale.name.toLowerCase() === name.toLowerCase()
          );

          // verificar se achou o nome
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

module.exports = LocaleDAO;
