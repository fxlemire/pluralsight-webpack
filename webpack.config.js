module.exports = {
  entry: ['./utils', './app.js'],
  output: {
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
