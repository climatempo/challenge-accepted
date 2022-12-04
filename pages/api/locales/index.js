import locales from "data/locales.json"

export default function handler(req, res) {
  res.status(200).json({ locales })
}
