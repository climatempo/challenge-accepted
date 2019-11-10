const express =  require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());


 require('./routes/weather.routes')(app);
 require('./routes/locales.routes')(app);

app.listen(port, ()=>{
    console.log('listen in port ', port)
});
