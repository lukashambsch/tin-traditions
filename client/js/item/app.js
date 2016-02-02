(function () {
  angular.module('app.item', ['ui.router', 'uiRouterStyles'])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('tt.item', {
          abstract: true,
          template: '<ui-view/>'
        })
        .state('tt.item.search', {
          url: '^/tins',
          templateUrl: 'js/item/search.html',
          controller: 'SearchController',
          controllerAs: 'search'
        })
        .state('tt.item.user', {
          url: '^/tins/user',
          templateUrl: 'js/item/search.html',
          controller: 'ItemsController',
          controllerAs: 'search'
        })
        .state('tt.item.detail', {
          url: '^/tins/:id',
          templateUrl: 'js/item/detail.html',
          data: {css: 'css/app.css'}
        })
        .state('tt.item.link', {
          url: '^/tins/:id/link',
          templateUrl: 'js/item/link.html',
          controller: 'ItemController',
          controllerAs: 'vm',
          data: {css: 'css/app.css'}
        })
        .state('tt.item.entryEdit', {
          url: '^/tins/:itemId/giftEntry/:id',
          templateUrl: 'js/item/upsert.html',
          data: {css: 'css/app.css'}
        })
        .state('tt.item.entryAdd', {
          url: '^/tins/:itemId/giftEntry',
          templateUrl: 'js/item/upsert.html',
          data: {css: 'css/app.css'}
        });
    }]);
})();
