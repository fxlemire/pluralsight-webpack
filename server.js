/* eslint-disable no-console */
const express = require('express');
const logger = require('morgan');
const path = require('path');
const routes = require('./routes/index');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackMiddleware = require('webpack-dev-middleware');

const PORT = 8000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use('/', routes);

// Only load this middelware in dev mode (important)
if (app.get('env') === 'development') {
  app.use(webpackMiddleware(webpack(webpackConfig), {
    publicPath: '/build',
    headers: {'X-Custom-Webpack-Header': 'yes'},
    stats: {colors: true}
  }));
}

// catch 404 and forward error to handler
app.use((req, res, next) => {
  const err = new Error('Not found');

  err.status = 404;
  next(err);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
