(function () {
  angular.module('app.item', ['ui.router', 'uiRouterStyles'])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('tt.item', {
          abstract: true,
          template: '<ui-view/>'
        })
        .state('tt.item.search', {
          url: '^/items',
          templateUrl: 'js/item/search.html'
        })
        .state('tt.item.user', {
          url: '^/items/{user:user}',
          templateUrl: 'js/item/search.html'
        })
        .state('tt.item.detail', {
          url: '^/items/:id',
          templateUrl: 'js/item/detail.html',
          data: {css: 'css/app.css'}
        })
        .state('tt.item.link', {
          url: '^/items/:id/link',
          templateUrl: 'js/item/link.html',
          controller: 'ItemController',
          controllerAs: 'vm',
          data: {css: 'css/app.css'}
        })
        .state('tt.item.entryEdit', {
          url: '^/items/:itemId/giftEntry/:id',
          templateUrl: 'js/item/upsert.html',
          data: {css: 'css/app.css'}
        })
        .state('tt.item.entryAdd', {
          url: '^/items/:itemId/giftEntry',
          templateUrl: 'js/item/upsert.html',
          data: {css: 'css/app.css'}
        });
    }]);
})();
