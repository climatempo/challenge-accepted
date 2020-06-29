const { resolve } = require('path');

module.exports = {
  entry: resolve(`${__dirname}/../src/index.jsx`),

  output: {
    path: resolve(`${__dirname}/build-prod`),
    filename: '[name]-[chunkhash].js',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', 'ts', 'tsx'],
    alias: {
      '@': resolve(`${__dirname}/src`),
    },
  },

  module: {
    rules: [
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)$/,
        use: 'file-loader',
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)$/,
        use: 'url-loader',
      },
    ],
  },
};
