import bandTemplate from './band-info.html';

module.exports = app => {
  angular.module(app)
    .directive('bandInfo', bandList => ({
      template: bandTemplate,
      restrict: 'E',
      controller: $scope => {
        $scope.bands = bandList;
      }
    }));
};
