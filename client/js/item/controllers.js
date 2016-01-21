(function () {
  angular.module('app.item')
    .controller('SearchController', ['ItemFactory', '$stateParams', SearchController])
    .controller('ItemController', ['$scope', 'ItemFactory', 'AuthFactory', '$stateParams', '$state', ItemController])
    .controller('GiftEntryController', ['GiftEntryFactory', 'ItemFactory', '$stateParams', GiftEntryController]);

  function SearchController (ItemFactory, $stateParams) {
    var vm = this;
    vm.items = ItemFactory.items;
    vm.serialNumber = '';
    vm.findItems = findItems;

    initialize();

    function initialize () {
      if (!$stateParams.user) {
        ItemFactory.findItems(vm.serialNumber).then(function () {
          vm.items = ItemFactory.items;
        });
      }
    }

    function findItems (serialNumber) {
      ItemFactory.findItems(serialNumber).then(function () {
        vm.items = ItemFactory.items;
      });
    }
  }

  function ItemController ($scope, ItemFactory, AuthFactory, $stateParams, $state) {
    var vm = this;

    vm.item = ItemFactory.item;
    vm.currentUser = AuthFactory.currentUser;
    vm.linkItem = linkItem;

    $scope.$watch(function () { return AuthFactory.currentUser; }, function (user) {
      vm.currentUser = user;
    });

    initialize();

    function initialize () {
      if ($stateParams.id) {
        ItemFactory.getItem($stateParams.id).then(function () {
          vm.item = ItemFactory.item;
        });
      }
    }

    function linkItem () {
      if (vm.currentUser && vm.item) {
        ItemFactory.linkToUser(vm.item.id, vm.currentUser.id).then(function (data) {
          $state.go('tt.item.detail', {id: data.itemId});
        });
      } else {
        $state.go('tt.auth.login');
      }
    }

  }

  function GiftEntryController (GiftEntryFactory, ItemFactory, $stateParams) {
    var vm = this;

    vm.saveEntry = GiftEntryFactory.saveGiftEntry;
    vm.item = ItemFactory.item;
    vm.giftEntry = GiftEntryFactory.giftEntry;

    if ($stateParams.id) {
      GiftEntryFactory.getGiftEntry($stateParams.id).then(function () {
        vm.giftEntry = GiftEntryFactory.giftEntry;
      });
    } else {
      vm.giftEntry = GiftEntryFactory.createGiftEntry($stateParams.itemId);
    }

    ItemFactory.getItem($stateParams.itemId).then(function () {
      vm.item = ItemFactory.item;
    });
  }
})();
