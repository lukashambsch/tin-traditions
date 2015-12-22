(function () {
  angular.module('app.core', ['ui.router', 'uiRouterStyles'])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('tt', {
          abstract: true,
          templateUrl: 'js/core/tt-nav.html',
          data: {css: 'css/app.css'}
        });
    }]);
})();
