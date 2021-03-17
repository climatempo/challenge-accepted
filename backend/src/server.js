const http = require('http')
const path = require('path')
const PORT = 3000
const DEFAULT_HEADER = { 'Content-Type': 'application/json' }
const routes = require('./routes')


const handler = (request, response) => {
  const { url, method } = request

  const [first, route, id] = url.split('/')
  request.queryString = { id: isNaN(id) ? id : Number(id)}
  
  const key = `/${route}:${method.toLowerCase()}`

  response.writeHead(200, DEFAULT_HEADER)

  const chosen = routes[key] || routes.default
  return chosen(request, response)
}

http.createServer(handler)
  .listen(PORT, () => console.log(`Server running at http://localhost:3000`))