(function () {
  angular.module('app.auth', ['ui.router', 'uiRouterStyles'])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('tt.auth', {
          abstract: true,
          template: '<ui-view/>',
          data: {css: 'css/app.css'}
        })
        .state('tt.auth.register', {
          url: '^/auth/account',
          templateUrl: 'js/auth/account.html'
        })
        .state('tt.auth.login', {
          url: '^/auth/login',
          templateUrl: 'js/auth/login.html'
        })
    }])
})();
