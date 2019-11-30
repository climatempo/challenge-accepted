export default (express) => {
  const measurements = require('../base/weather.json');

  /**
     * Retrieves the weather data from a locale Id
     *
     * @param {number} id Id of the locale
     * @returns object
     */
  const findByLocale = (id) => measurements.find((measure) => measure.locale.id.toString() === id);

  /**
    * Endpoints
    */
  express.get('/weather', (request, response) => {
    const data = findByLocale(request.query.locale);
    return response.json({ data });
  });
};
