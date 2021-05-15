const server = require('./src/server');

require('./src/config/dbConnection');

server.listen().then(({ url }) => {
  console.log(`🚀  Servidor rodando em ${url}`);
});
