export default (express) => {
  const locales = require('../base/locales.json');

  /**
     * Retrieves a single element from locales array given name or id.
     *
     * @param {number | string} toFind Represents id or name properties to
     * match agains the locales array.
     * @returns object
     */
  const findOne = (name) => locales.find((locale) => locale.name === name);

  /**
     * Retrieves an array of elements that matches the same state provided
     * by the client.
     *
     * @param {string} state A state to find in the locales array.
     * @returns array
     */
  const findByState = (state) => locales.filter((locale) => locale.state === state);

  /**
     * Retrieves the entire locales array.
     *
     * @returns array
     */
  const findAll = () => locales;

  /**
     * Endpoints
     */
  express.get('/locales', (_, response) => {
    const data = findAll();
    return response.json({ data });
  });

  express.get('/locale', (request, response) => {
    const data = findOne(request.query.name);
    return response.json({ data });
  });

  express.get('/state', (request, response) => {
    const data = findByState(request.query.state);
    return response.json({ data });
  });
};
