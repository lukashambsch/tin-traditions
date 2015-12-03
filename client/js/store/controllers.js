(function () {
  angular.module('app.store')
    .controller('StoreController', ['SalesItem', 'ngCart', StoreController])
    .controller('ProductController', ['SalesItem', ProductController]);

    function StoreController (SalesItem, ngCart) {
      var vm = this;

      vm.products = [];

      getProducts();

      function getProducts () {
        vm.products = SalesItem.find();
      }
    }

    function ProductController (SalesItem) {
      var vm = this;
    }
})();
