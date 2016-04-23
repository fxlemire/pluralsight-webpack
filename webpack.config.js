const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
  context: path.resolve('js'),

  devServer: {
    contentBase: 'public'
  },

  entry: ['./app'],

  output: {
    path: path.resolve('build/'),
    publicPath: '/public/assets/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css!postcss!sass'
      },
      {
        test: /\.(png|jpg|ttf|eot)$/,
        exclude: /node_modules/,
        loader: 'url?limit=8192'
      }
    ]
  },

  postcss: () => [autoprefixer],

  resolve: {
    extensions: ['', '.js'] // default config. add more extensions when needed
  }
};
