(function () {
  angular.module('app.tin', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('tinSearch', {
          url: '^/',
          templateUrl: 'js/tin/search.html'
        })
        .state('tinDetail', {
          url: '^/:id',
          templateUrl: 'js/tin/detail.html'
        })
    }])
})();
