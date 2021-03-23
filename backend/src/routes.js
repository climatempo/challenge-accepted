const locationService = require("./factories/locationFactory").locationInstance();
const weatherService = require("./factories/weatherFactory").weatherInstance();

const mapper = {
  "location": locationService,
  "weather": weatherService,
}

const routes = async (request, response, service) => {
    try {
      const { id } = request.queryString;
      const serviceHandler = mapper[service]
      if (!serviceHandler) {
        throw new Error('{ message: "Page not found" }')
      }
      const responseData = await serviceHandler.find(id);
      response.write(JSON.stringify(responseData));
    } catch (error) {
      console.log(error);
      response.write(error);
    } finally {
      return response.end();
    }
}

module.exports = routes
