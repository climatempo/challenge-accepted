const http = require("http");
const routes = require("./routes");
const { PORT, DEFAULT_HEADER} = require("./config")

const handler = (request, response) => {
  const { url } = request;
  const [_, route, id] = url.split("/");
  request.queryString = { id: isNaN(id) ? id : Number(id) };

  response.writeHead(200, DEFAULT_HEADER);

  const chosen = routes(request, response, route) || routes(request, response);
  return chosen;
};

http
  .createServer(handler)
  .listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`)
  );
