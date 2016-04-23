module.exports = app => {
  angular.module(app)
    .factory('bandList', () => [
      {name: 'Cinderella', formed: 1983},
      {name: 'Bon Jovi', formed: 1983}
    ]);
};
