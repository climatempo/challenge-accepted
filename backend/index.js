//add a lib express e definindo a porta
const express = require("express");
const cors = require("cors");
const LocaleController = require("./controllers/LocaleController");
const ForecastController = require("./controllers/ForecastController");
const app = express();
const PORT = 8080;

app.use(cors())


// locales?filter=<string>
app.get("/locales", LocaleController.getLocales);

// /forecast?id=<number>&temperatureUnit=<C,F>&precipitationUnit=<mm,inch>
app.get("/forecast", ForecastController.getForecast);

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
});