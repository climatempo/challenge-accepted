const locationService = require("./factories/locationFactory").locationInstance();
const weatherService = require("./factories/weatherFactory").weatherInstance();

module.exports = {
  "/location:get": async (request, response) => {
    const { id } = request.queryString;
    const location = await locationService.find(id);
    response.write(JSON.stringify(location));
    return response.end();
  },
  "/weather:get": async (request, response) => {
    const { id } = request.queryString;
    const weather = await weatherService.find(id);
    response.write(JSON.stringify(weather));
    return response.end();
  },
  default: (request, response) => {
    response.write('{ message: "Page not found" }');
    response.end();
  },
};
