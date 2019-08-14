const app = require('./app');

app.listen(process.env.PORT || 3344, () => {
    console.log('Server started...');
});