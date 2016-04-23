const path = require('path');

module.exports = {
  context: path.resolve('public/js'),

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
        loader: 'style!css'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js'] // default config. add more extensions when needed
  }
};
