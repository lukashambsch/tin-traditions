(function () {
  angular.module('app.item', ['ui.router', 'uiRouterStyles'])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('itemSearch', {
          url: '^/items',
          templateUrl: 'js/item/search.html',
          data: {css: 'css/app.css'}
        })
        .state('itemDetail', {
          url: '^/items/:id',
          templateUrl: 'js/item/detail.html',
          data: {css: 'css/app.css'}
        })
        .state('giftEntryEdit', {
          url: '^/items/:itemId/giftEntry/:id',
          templateUrl: 'js/item/upsert.html',
          data: {css: 'css/app.css'}
        })
        .state('giftEntryAdd', {
          url: '^/items/:itemId/giftEntry',
          templateUrl: 'js/item/upsert.html',
          data: {css: 'css/app.css'}
        });
    }]);
})();
