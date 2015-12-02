(function () {
  angular.module('app.home', ['ui.router', 'uiRouterStyles'])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('home', {
          url: '^/',
          templateUrl: 'js/home/home.html',
          data: {
            css: [
              'http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800',
              'http://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic',
              'theme/font-awesome/css/font-awesome.min.css',
              'theme/css/animate.min.css',
              'theme/css/creative.css'
            ]
          }
        });
    }]);
})();
