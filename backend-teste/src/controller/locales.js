const Locale = require('../model/locale')

async function list(req, res) {
  try {
    const result = await Locale.list();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  list,
}
