const Weather = require('../model/weather')

async function get(req, res) {
  const idCity = parseInt(req.params.idCity, 10);
  try {
    const result = await Weather.get(idCity);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  get
}