const locationService = require("./factories/locationFactory").locationInstance();
const weatherService = require("./factories/weatherFactory").weatherInstance();

module.exports = {
  "/location:get": async (request, response) => {
    try {
      const { id } = request.queryString;
      const location = await locationService.find(id);
      response.write(JSON.stringify(location));
    } catch (error) {
      console.log(error);
      response.write('{ message: "Page not found" }');
    } finally {
      return response.end();
    }
  },
  "/weather:get": async (request, response) => {
    try {
      const { id } = request.queryString;
      const weather = await weatherService.find(id);
      response.write(JSON.stringify(weather));
    } catch (error) {
      console.log(error);
      response.write('{ message: "Page not found" }');
    } finally {
      return response.end();
    }
  },
  default: (request, response) => {
    response.write('{ message: "Page not found" }');
    response.end();
  },
};
