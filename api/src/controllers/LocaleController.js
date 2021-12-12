const localeService = require("../services/LocaleService");

module.exports = {
  async index(req, res) {
    const term = req.query.s;

    localeService.search(term, (err, results) => {
      if (err) {
        return res.status(500).send("Something went wrong");
      }

      let locales = [];

      if (results?.hits?.hits) {
        const hits = results.hits.hits;
        const sortedHits = hits.sort((a, b) => b - a);
        locales = sortedHits.map((hit) => hit._source);
      }

      return res.json(locales);
    });
  },
};
