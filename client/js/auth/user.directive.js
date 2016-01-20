(function () {
  angular.module('app.auth')
    .directive('user', [userDirective]);

  function userDirective () {
    return {
      restrict: 'E',
      templateUrl: 'js/auth/user.html',
      controller: 'UserController',
      controllerAs: 'user'
    };
  }
})();
