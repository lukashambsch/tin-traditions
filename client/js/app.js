(function () {
  angular.module('app', [
    'app.core', 'app.home', 'app.item', 'lbServices', 'ui.router', 'ui.bootstrap', 'uiRouterStyles'])
    .config(['$urlRouterProvider', function ($urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
    }])
    .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }])
})();
