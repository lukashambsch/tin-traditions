(function () {
  angular.module('app.auth')
    .controller('UserController', ['$scope', '$cookies', 'AuthFactory', UserController])

  function UserController ($scope, $cookies, AuthFactory) {
    var vm = this;
    vm.currentUser = AuthFactory.currentUser;
    vm.currentUserHasImage = currentUserHasImage;

    initialize();

    $scope.$watch(function () { return AuthFactory.currentUser; }, function (usr) {
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

    function currentUserHasImage () {
      return (
        vm.currentUser && vm.currentUser.profiles && vm.currentUser.profiles.length > 0 &&
        vm.currentUser.profiles[0].profile.photos.length > 0 && vm.currentUser.profiles[0].profile.photos[0].value
      );
    }
  }
})();
