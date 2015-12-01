(function () {
  angular.module('app.item', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('itemSearch', {
          url: '^/items',
          templateUrl: 'js/item/search.html'
        })
        .state('itemDetail', {
          url: '^/items/:id',
          templateUrl: 'js/item/detail.html'
        })
        .state('giftEntryEdit', {
          url: '^/items/:itemId/giftEntry/:id',
          templateUrl: 'js/item/upsert.html'
        })
        .state('giftEntryAdd', {
          url: '^/items/:itemId/giftEntry',
          templateUrl: 'js/item/upsert.html'
        });
    }]);
})();
