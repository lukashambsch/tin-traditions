(function () {
  angular.module('app', ['app.tin', 'lbServices', 'ui.router', 'ui.bootstrap'])
    .config(['$urlRouterProvider', function ($urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
    }])
    .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }])
})();
