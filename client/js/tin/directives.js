(function() {
  angular.module('app.tin')
    .directive('tinView', [tinView])
    .directive('tinEdit', [tinEdit]);

  function tinView () {
    return {
      restrict: 'E',
      templateUrl: 'js/tin/tin-view.html'
    }
  }

  function tinEdit () {
    return {
      restrict: 'E',
      templateUrl: 'js/tin/tin-edit.html'
    }
  }
})();
