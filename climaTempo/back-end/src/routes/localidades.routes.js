const localidadesRoutes = (app, fs) => {
    const dataPath = './src/base/locales.json';

    // Retorna todas as localidades
    app.get('/localidades', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
          if (err) {
            throw err;
          }
    
          res.send(JSON.parse(data));
        });
      });

    
    // Retorna a localidade a partir do seu id  
    app.get('/localidades/:id', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }

        const { id } = req.params;
        const localidades = JSON.parse(data);

        const foundLocalidade = localidades.find(l =>l.id==id);

        res.send(foundLocalidade);
        
      });
    });  
};

module.exports = localidadesRoutes;