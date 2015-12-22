(function () {
  angular.module('app.core')
    .directive('ttNav', [ttNav]);

  function ttNav () {
    return {
      restrict: 'E',
      templateUrl: 'js/core/tt-nav.html'
    };
  }
})();
