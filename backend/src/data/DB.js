const fs = require("fs");

/**
 * Acessar os dados da base
 *
 * @param {String} path - acessar o arquivo com os dados
 */
function db(path) {
  return new Promise((resolve, reject) => {
    // realiza a leitura do arquivo
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

module.exports = db;
