module.exports = app => {
  angular.module(app)
    .directive('bandInfo', bandList => ({
      template: '<h1 ng-repeat="band in bands">{{band.name}} - {{band.formed}}</h1>',
      restrict: 'E',
      controller: $scope => {
        $scope.bands = bandList;
      }
    }));
};
