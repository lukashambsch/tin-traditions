(function () {
  angular.module('app.store', ['ui.router', 'uiRouterStyles', 'ngCart'])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('storeList', {
          url: '^/store',
          templateUrl: 'js/store/store.html',
          data: {css: 'css/app.css'}
        })
        .state('storeItemDisplay', {
          url: '^/store/:id',
          templateUrl: 'js/store/display.html',
          data: {css: 'css/app.css'}
        })
        .state('cart', {
          url: '^/cart',
          templateUrl: 'js/store/cart.html',
          data: {css: 'css/app.css'}
        });
    }]);
})();
