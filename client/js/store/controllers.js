(function () {
  angular.module('app.store')
    .controller('StoreController', ['Product', 'ngCart', StoreController])
    .controller('ProductController', ['Product', ProductController]);

    function StoreController (Product, ngCart) {
      var vm = this;

      vm.products = [];

      getProducts();

      function getProducts () {
        vm.products = Product.find();
      }
    }

    function ProductController (Product) {
      var vm = this;
    }
})();
