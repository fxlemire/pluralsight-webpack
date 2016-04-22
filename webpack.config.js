const path = require('path');

module.exports = {
  context: path.resolve('js'),

  devServer: {
    contentBase: 'public'
  },

  entry: ['./utils', './app'],

  output: {
    path: path.resolve('build/js/'),
    publicPath: '/public/assets/js/',
    filename: 'bundle.js'
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

  resolve: {
    extensions: ['', '.js'] // default config. add more extensions when needed
  }
};
