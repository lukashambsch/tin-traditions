(function () {
  angular.module('app.auth')
    .factory('AuthFactory', ['User', 'UserFactory', 'LoopBackAuth', AuthFactory]);

  function AuthFactory (User, UserFactory, LoopBackAuth) {

    AuthFactory.currentUser = null;
    AuthFactory.ensureHasCurrentUser = ensureHasCurrentUser;

    initialize();

    return AuthFactory;

    function initialize () {
      console.log(LoopBackAuth);
      if (LoopBackAuth.currentUserData) {
        AuthFactory.currentUser = LoopBackAuth.currentUserData;
      }
    }

    function ensureHasCurrentUser () {
      if (AuthFactory.currentUser) {
        if (AuthFactory.currentUser.id === 'social') {
          UserFactory.getAccount().then(function (acct) {
            AuthFactory.currentUser = acct;
          }, function (err) {
            console.log('UserFactory.getAccount() error');
          });
        } else {
          console.log('Using cached user.');
        }
      } else {
        console.log('Fetching current user from the server.');
        User.getCurrent.$promise.then(function (acct) {
          AuthFactory.currentUser = acct;
        }, function (err) {
          console.log('User.getCurrent() error', err);
        });
      }
    }
  }
})();
