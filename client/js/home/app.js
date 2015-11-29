(function () {
  angular.module('app.home', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('home', {
          url: '^/',
          templateUrl: 'js/home/home.html'
        });
    }]);
})();
