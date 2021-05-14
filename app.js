const server = require('./src/server');

server.listen().then(({ url }) => {
  console.log(`🚀  Servidor rodando em ${url}`);
});
