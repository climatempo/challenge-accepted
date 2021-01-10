const weatherRoutes = (app, fs) => {
    const dataPath = './src/base/weather.json';

    // Retorna todos os weathers
    app.get('/weather', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
          if (err) {
            throw err;
          }
    
          res.send(JSON.parse(data));
        });
      });

      // Retorna todas as weathers a partir do nome da cidade
    app.get('/weather/:name', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }

        const { name } = req.params;
        const weathers = JSON.parse(data);

        const foundWeather = weathers.find(w =>w.locale.name==name);
        

        res.send(foundWeather);
      });
    });
};

module.exports = weatherRoutes;