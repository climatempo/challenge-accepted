const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  mode: NODE_ENV,
  entry: {
    app: path.join(__dirname, 'src', 'view', 'js', 'app.js'),
    materialize: path.join(__dirname, 'src', 'view', 'libs', 'materialize', 'materialize.min.js'),
  },
  output: {
    path: path.join(__dirname, 'src', 'public'),
    filename: '[name].min.js',
  },
};
