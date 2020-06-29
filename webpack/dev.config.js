const webpack = require('webpack');
const { resolve } = require('path');
const webpackCommon = require('./common.config');
const webpackMerge = require('webpack-merge');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(webpackCommon, {
  devtool: 'source-map',
  mode: 'development',

  output: {
    path: resolve(`${__dirname}/../build-prod`),
    filename: '[name].js',
  },

  devServer: {
    port: 3000,
    writeToDisk: false,
    hot: true,
  },

  plugins: [
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(`${__dirname}/../src/template.html`),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});
