import app, { isProductionMode } from './app';

import cluster from './utils/cluster';

const server = app => {
  const port = process.env.PORT || 4000;
  return () => {
    app.listen(port, () => {
      global.console.log(`🚀 Server ready at http://localhost:${port}/api`);
    });
  };
};

if (isProductionMode) cluster(server(app()));
else server(app())();
