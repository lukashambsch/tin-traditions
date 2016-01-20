(function () {
  angular.module('app.auth')
    .factory('UserFactory', ['$http', '$cookies', 'LoopBackAuth', UserFactory]);

  function UserFactory ($http, $cookies, LoopBackAuth) {
    UserFactory.getAccount = getAccount;

    return UserFactory;

    function getAccount () {
      return $http.get('/auth/account')
        .then(function (response) {
          if (response.data.id) {
            LoopBackAuth.currentUserId = response.data.id;
            LoopBackAuth.accessTokenId = $cookies.get('access_token').substring(2, 66);
            return response.data;
          }
          if (LoopBackAuth.currentUserId === null) {
            delete $cookies['access_token'];
            LoopBackAuth.accessTokenId = null;
          }
          LoopBackAuth.save();
          return null;
        });
    }
  }
})();
