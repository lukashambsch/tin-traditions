(function () {
  angular.module('app.store', ['ui.router', 'ngCart'])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('storeList', {
          url: '^/store',
          templateUrl: 'js/store/store.html'
        })
        .state('storeItemDisplay', {
          url: '^/store/:id',
          templateUrl: 'js/store/display.html'
        });
    }]);
})();
