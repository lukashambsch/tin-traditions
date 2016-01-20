(function () {
  angular.module('app.core')
    .directive('ttNav', [ttNavDirective]);

  function ttNavDirective () {
    return {
      restrict: 'E',
      templateUrl: 'js/core/tt-nav.html'
    };
  }
})();
