(function () {
  angular.module('app.core')
    .directive('tinNav', [tinNav]);

  function tinNav () {
    return {
      restrict: 'E',
      templateUrl: 'js/core/nav.html'
    }
  }
})();
