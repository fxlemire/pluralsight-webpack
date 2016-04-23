/* eslint-disable no-console,func-names */
const stripComments = require('strip-json-comments');

module.exports = function (source) {
  this.cacheable(); // eslint-disable-line no-invalid-this

  console.log('source', source);
  console.log('strippedSource', stripComments(source));

  return stripComments(source);
};
