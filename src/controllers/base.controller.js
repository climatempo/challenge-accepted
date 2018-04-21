import fs from 'fs';
import path from 'path';

class BaseController {
  static readJSON(name) {
    return new Promise((resolve, reject) => {
      fs.readFile(path.join(__dirname, '..', '..', 'base', name), (err, data) => {
        err ? reject(err) : resolve(data);
      });
    });
  }

  readBaseFile(req, res, fileName) {
    BaseController.readJSON(fileName)
      .then(data => res.json(JSON.parse(data)))
      .catch(err => res.status(500).send({ error: err.message }));
  }
}

export default BaseController;
