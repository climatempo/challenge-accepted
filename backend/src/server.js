const http = require('http')
const PORT = 3000
const DEFAULT_HEADER = { 'Content-Type': 'application/json' }

const handler = (request, response) => {
  const { url, method } = request

  if (method !== 'GET') {
    response.statusCode = 405
    response.end('Method not allowed.')
  }  
}

http.createServer(handler)
  .listen(PORT, () => console.log(`Server running at http://localhost:3000`))