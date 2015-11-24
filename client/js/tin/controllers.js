(function () {
  angular.module('app.tin')
    .controller('SearchController', ['Tin', SearchController]);

  function SearchController (Tin) {
    var vm = this;
    vm.tins = Tin.query(function () {
      console.log(vm.tins);
    });
    vm.test = 'test';
  }
})();
