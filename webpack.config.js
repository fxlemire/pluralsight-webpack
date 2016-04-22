const path = require('path');
const webpack = require('webpack');

const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');

module.exports = {
  context: path.resolve('js'),

  devServer: {
    contentBase: 'public'
  },

  entry: {
    about: './about_page.js',
    contact: './contact_page.js',
    home: './home_page.js'
  },

  output: {
    path: path.resolve('build/js/'),
    publicPath: '/public/assets/js/',
    filename: '[name].js'
  },

  module: {
    preLoaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [commonsPlugin],

  resolve: {
    extensions: ['', '.js'] // default config. add more extensions when needed
  }
};
