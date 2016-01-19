(function () {
  angular.module('app', [
    'app.core',
    'app.home',
    'app.auth',
    'app.item',
    'app.store',
    'lbServices',
    'ui.router',
    'ui.bootstrap',
    'ngCart'
  ])
    .config(['$urlRouterProvider', function ($urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
    }])
    .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);
})();
