(function () {
  angular.module('app.store', ['ui.router', 'uiRouterStyles', 'ngCart'])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('tt.store', {
          abstract: true,
          template: '<ui-view/>'
        })
        .state('tt.store.list', {
          url: '^/store',
          templateUrl: 'js/store/store.html',
          data: {css: 'css/app.css'}
        })
        .state('tt.store.product', {
          url: '^/store/:id',
          templateUrl: 'js/store/display.html',
          data: {css: 'css/app.css'}
        })
        .state('tt.store.cart', {
          url: '^/cart',
          templateUrl: 'js/store/cart.html',
          data: {css: 'css/app.css'}
        });
    }]);
})();
