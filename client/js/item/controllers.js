(function () {
  angular.module('app.item')
    .controller('SearchController', ['ItemFactory', 'AuthFactory', SearchController])
    .controller('ItemsController', ['$state', 'ItemFactory', 'AuthFactory', ItemsController])
    .controller('ItemController', ['ItemFactory', 'AuthFactory', '$stateParams', '$state', ItemController])
    .controller('GiftEntryController', ['GiftEntryFactory', 'ItemFactory', '$stateParams', '$state', GiftEntryController]);

  function SearchController (ItemFactory, AuthFactory) {
    var vm = this;
    vm.items = ItemFactory.items;
    vm.serialNumber = '';
    vm.findItems = findItems;
    vm.checkIfLinked = checkIfLinked;

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

    function checkIfLinked (item) {
      var isLinked = false;
      if (item.users.length > 0 && AuthFactory.currentUser) {
        item.users.forEach(function (usr) {
          if (usr.id === AuthFactory.currentUser.id) {
            isLinked = true;
          }
        });
      }
      return isLinked;
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
    vm.canEdit = false;

    initialize();

    function initialize () {
      if ($stateParams.id) {
        getItem($stateParams.id);
      }
    }

    function getItem (itemId) {
      ItemFactory.getItem($stateParams.id).then(function () {
        vm.item = ItemFactory.item;
        checkIfEditable();
      });
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

    function checkIfEditable () {
      vm.item.users.forEach(function (user) {
        if (user.id === AuthFactory.currentUser.id) {
          vm.canEdit = true;
        }
      });
    }
  }

  function GiftEntryController (GiftEntryFactory, ItemFactory, $stateParams, $state) {
    var vm = this;

    vm.saveEntry = saveEntry;
    vm.item = ItemFactory.item;
    vm.giftEntry = GiftEntryFactory.giftEntry;

    initialize();

    function initialize () {
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

    function saveEntry () {
      GiftEntryFactory.saveGiftEntry().then(function () {
        $state.go('tt.item.detail', {id: GiftEntryFactory.giftEntry.itemId});
      });
    }
  }
})();
