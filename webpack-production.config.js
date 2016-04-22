const devConfig = require('./webpack.config');
const webpackStrip = require('strip-loader');

const stripLoader = {
  test: /\.js$/, // can be an array of multiple regex expressions
  exclude: /node_modules/,
  loader: webpackStrip.loader('console.log')
};

devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;
