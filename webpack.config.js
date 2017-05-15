var webpack = require('webpack');

module.exports = {
  entry: [
    './src/clientApp.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: "eval",
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  }
};