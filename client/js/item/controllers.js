(function () {
  angular.module('app.item')
    .controller('SearchController', ['ItemFactory', SearchController])
    .controller('ItemsController', ['$state', 'ItemFactory', 'AuthFactory', ItemsController])
    .controller('ItemController', ['ItemFactory', 'AuthFactory', '$stateParams', '$state', ItemController])
    .controller('GiftEntryController', ['GiftEntryFactory', 'ItemFactory', '$stateParams', GiftEntryController]);

  function SearchController (ItemFactory) {
    var vm = this;
    vm.items = ItemFactory.items;
    vm.serialNumber = '';
    vm.findItems = findItems;

    initialize();

    function initialize () {
      ItemFactory.findItems(vm.serialNumber).then(function () {
        vm.items = ItemFactory.items;
      });
    }

    function findItems (serialNumber) {
      ItemFactory.findItems(serialNumber).then(function () {
        vm.items = ItemFactory.items;
      });
    }
  }

  function ItemsController ($state, ItemFactory, AuthFactory) {
    var vm = this;
    vm.items = ItemFactory.items;
    vm.serialNumber = '';
    vm.findItems = getUserItems;

    initialize();

    function initialize() {
      getUserItems();
    }

    function getUserItems () {
      if (AuthFactory.currentUser && AuthFactory.currentUser.id !== 'social') {
        ItemFactory.getItemsByUserId(vm.serialNumber, AuthFactory.currentUser.id).then(function () {
          vm.items = ItemFactory.items;
        });
      } else {
        $state.go('tt.auth.login');
      }
    }
  }

  function ItemController (ItemFactory, AuthFactory, $stateParams, $state) {
    var vm = this;

    vm.item = ItemFactory.item;
    vm.linkItem = linkItem;

    initialize();

    function initialize () {
      if ($stateParams.id) {
        ItemFactory.getItem($stateParams.id).then(function () {
          vm.item = ItemFactory.item;
        });
      }
    }

    function linkItem () {
      if (AuthFactory.currentUser && vm.item) {
        ItemFactory.linkToUser(vm.item.id, AuthFactory.currentUser.id).then(function (data) {
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
