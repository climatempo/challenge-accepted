const server = require('./server');

require('./config/dbConnection');

server.listen().then(({ url }) => {
  console.log(`🚀  Servidor rodando em ${url}`);
});
