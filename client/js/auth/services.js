(function () {
  angular.module('app.auth')
    .factory('AuthFactory', ['$http', AuthFactory])

  function AuthFactory ($http) {

    AuthFactory.user = {};
    AuthFactory.getUser = getUser;

    return AuthFactory;

    function getUser () {
      return $http.get('/auth/account').then(function (res) {
        AuthFactory.user = res;
      }, function (err) {
        if (err) console.log(err);
      });
    }

  }
})();
