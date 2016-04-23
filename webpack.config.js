const path = require('path');

module.exports = {
  context: path.resolve('js'),

  devServer: {
    contentBase: 'public'
  },

  entry: ['./app'],

  output: {
    path: path.resolve('build/js'),
    publicPath: '/public/assets/js',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: `json!${path.resolve('loaders/strip')}`
      }
    ]
  },

  resolve: {
    extensions: ['', '.js'] // default config. add more extensions when needed
  }
};
