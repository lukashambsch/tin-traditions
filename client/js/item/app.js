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
        });
    }]);
})();
