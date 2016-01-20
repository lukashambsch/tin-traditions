(function () {
  angular.module('app.auth')
    .controller('UserController', ['$scope', '$cookies', 'AuthFactory', UserController])

  function UserController ($scope, $cookies, AuthFactory) {
    var vm = this;
    vm.currentUser = AuthFactory.currentUser;

    initialize();

    $scope.$watch(function () { return AuthFactory.currentUser; }, function (usr) {
      console.log(usr);
      vm.currentUser = usr;
    });

    function initialize () {
      if (AuthFactory.currentUser === null) {
        if ($cookies.get('access_token')) {
          vm.currentUser = AuthFactory.currentUser = {id: 'social'};
        }
      }
      getCurrentUser();
    }

    function getCurrentUser () {
      AuthFactory.ensureHasCurrentUser();
    }
  }
})();
