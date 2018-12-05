const moment = require("moment");

/**
 * Formata a data numa string
 *
 * @param {String} date - obeto com a data
 * @returns {String}
 */
export function dateParser(date) {
  return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
}
