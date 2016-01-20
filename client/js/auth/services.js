(function () {
  angular.module('app.auth')
    .factory('AuthFactory', ['User', 'UserFactory', AuthFactory]);

  function AuthFactory (User, UserFactory) {

    AuthFactory.currentUser = null;
    AuthFactory.ensureHasCurrentUser = ensureHasCurrentUser;

    return AuthFactory;

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
