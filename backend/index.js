//add a lib path e convertendo os arquibos para json
const path = require("path");
const fs = require("fs");
const locales = JSON.parse(fs.readFileSync(path.join(__dirname,"data","locales.json"), "utf-8"));
const weatherData = JSON.parse(fs.readFileSync(path.join(__dirname,"data","weather.json"), "utf-8"));

//add a lib express e definindo a porta
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

app.use(cors())


// locales?filter=<string>
app.get("/locales", (req, res) => {
    const filter = req.query.filter
    if(filter != undefined){

        const filteredCities = []

        for(const city of locales){
            const cityUpperCase = city.name.toUpperCase()

            if(cityUpperCase.indexOf(filter.toUpperCase()) != -1){
                filteredCities.push(city)
            }
        }
        res.status(200).json(filteredCities)
    } else {    
        res.status(200).json(locales)
    }
    
});

// /forecast?id=<number>
app.get("/forecast", (req, res) => {
    const id = req.query.id
    if(id != undefined){

        let forecast

        for(const weatherDataCity of weatherData){
            if(Number(id) === weatherDataCity.locale.id){
                forecast = weatherDataCity
            }
        }
        
        if(forecast != undefined){
            res.status(200).json(forecast)
        } else {
            res.status(404).json({
                error: "Cidade não encontrada"
            })
        }
    } else {
        res.status(400).json({
            error: "id é obrigatório"
        })
    }
});

app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`)
});