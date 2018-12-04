const LocaleDAO = require("../data").LocaleDAO;
const localeDAO = new LocaleDAO();

/** Controller para buscar locais na base de dados */
class LocaleController {
  /**
   * Busca um cidade na base pelo nome
   *
   * @param {String} name - nome do local
   */
  static async findByName(name) {
    return new Promise((resolve, reject) => {
      if (name !== "") {
        // acessar a base de dados
        localeDAO
          .findByName(name)
          .then(result => {
            // retornar o resultado para o usuário
            resolve(result);
          })
          .catch(error => {
            // erro ao acessar os dados
            reject(error);
          });
      } else {
        // nome vazio
        resolve({});
      }
    });
  }
}

module.exports = LocaleController;
