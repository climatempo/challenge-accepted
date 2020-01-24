const Dotenv = require('dotenv-webpack');
const path = require('path');

const PATH_SOURCE = path.join(__dirname, './src');
const PATH_PUBLIC = path.join(__dirname, 'public/');
const PATH_DIST = path.join(PATH_PUBLIC, 'dist');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // NEW LINE

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: { main: ['@babel/polyfill', path.join(PATH_SOURCE, 'index.jsx')] },
  output: {
    publicPath: '/dist',
    path: PATH_DIST,
    filename: devMode ? 'bundle.js' : 'bundle.[hash].js',
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new Dotenv({ systemvars: true }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
    }),
    new HtmlWebpackPlugin({
      title: 'E o Tempo?',
      filename: path.join(PATH_PUBLIC, 'index.html'),
      template: path.join(PATH_SOURCE, 'index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          devMode ? MiniCssExtractPlugin.loader : 'style-loader', // https://github.com/webpack-contrib/mini-css-extract-plugin#advanced-configuration-example
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ['file-loader'],
      },
    ],
  },
  devServer: {
    contentBase: PATH_PUBLIC,
    historyApiFallback: true,
    publicPath: '/dist/',
    port: 8080,
    watchOptions: {
      pool: true,
    },
  },
};
