const server = require('./server');

require('./config/dbConnection');

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀  Servidor rodando em ${url}`);
});
