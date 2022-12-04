import weatherData from "data/weather.json"

export default function handler(req, res) {
  res.status(200).json(weatherData)
}
