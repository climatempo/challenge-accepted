import app from './app';

const server = app => {
  const port = process.env.PORT || 4000;
  return () => {
    app.listen(port, () => {
      global.console.log(`🚀 Server ready at http://localhost:${port}/api`);
    });
  };
};

server(app())();
