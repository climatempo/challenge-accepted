const express = require("express"),
      app = express(),
      bodyparser = require('body-parser'),
      weather = require('./routes/weather.js'),
      locale = require('./routes/locale.js');
      path = require("path");


app.use(bodyparser.json());
app.use("/weather",weather);
app.use("/locale",locale);
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get("/", function(req, res){
	res.status(200).send("Bem-Vindo!");
});

app.listen(process.env.PORT || 8000, function () {
    console.log('Listening on http://localhost:' + (process.env.PORT || 8000));
});
