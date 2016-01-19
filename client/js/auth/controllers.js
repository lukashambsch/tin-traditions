(function () {
  angular.module('app.auth')
    .controller('UserController', ['AuthFactory', UserController])

  function UserController (AuthFactory) {
    var vm = this;
    vm.user = AuthFactory.user;
    vm.getUser = getUser;

    vm.getUser();

    function getUser () {
      AuthFactory.getUser().then(function () {
        console.log(AuthFactory);
        vm.user = AuthFactory.user;
      });
    }
  }
})();
