const path = require('path')

module.exports = {
  target: 'web',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    disableHostCheck: true,
    // resolve o problema do live reload com o gitpod
    public: require('child_process').execSync('gp url 8080').toString().trim(),
    host: '0.0.0.0',
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}