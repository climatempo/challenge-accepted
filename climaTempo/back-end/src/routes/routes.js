const localidadesRoutes = require('./localidades.routes');
const weatherRoutes = require('./weather.routes');

const appRouter = (app, fs) => {
  
  app.get('/', (req, res) => {
    res.send('Welcome to ClimaTempo');
  });

  localidadesRoutes(app, fs);
  weatherRoutes(app, fs);
};

module.exports = appRouter;