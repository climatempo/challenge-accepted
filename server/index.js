const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const port = 9000;

app.get('/', (req, res) => {
    res.send('Previsão do tempo: Servidor ON');
});

app.use(cors());
app.use(express.json());

app.get('/api/locales/', function (req, res) {
    const data = fs.readFileSync('./data/locales.json', 'utf-8');

    res.send(JSON.parse(data));
});

app.get('/api/weather/', function (req, res) {
    const data = fs.readFileSync('./data/weather.json', 'utf8');

    res.send(JSON.parse(data));
});

app.get('/api/weather/:id', function (req, res) {
    const weather = fs.readFileSync('./data/weather.json', 'utf8');

    res.send(
        JSON.parse(weather).filter(
            (item) => item.locale.id === Number(req.params['id']),
        ),
    );
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
