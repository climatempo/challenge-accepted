const Locale = require("../models/Locale");

module.exports = {
  search(term, callback) {
    Locale.search(
      {
        query_string: {
          query: term + "*",
        },
      },
      (err, results) => callback(err, results)
    );
  },
};
