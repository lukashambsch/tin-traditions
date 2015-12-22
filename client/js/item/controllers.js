(function () {
  angular.module('app.item')
    .controller('SearchController', ['ItemFactory', SearchController])
    .controller('ItemController', ['ItemFactory', '$stateParams', ItemController])
    .controller('GiftEntryController', ['GiftEntryFactory', 'ItemFactory', '$stateParams', '$state', GiftEntryController]);

  function SearchController (ItemFactory) {
    var vm = this;
    vm.items = ItemFactory.items;
    vm.serialNumber = '';
    vm.findItems = findItems;

    ItemFactory.findItems(vm.serialNumber).then(function () {
      vm.items = ItemFactory.items;
    });

    function findItems (serialNumber) {
      ItemFactory.findItems(serialNumber).then(function () {
        vm.items = ItemFactory.items;
      });
    }
  }

  function ItemController (ItemFactory, $stateParams) {
    var vm = this;

    vm.item = ItemFactory.item;

    ItemFactory.getItem($stateParams.id).then(function () {
      vm.item = ItemFactory.item;
    });

  }

  function GiftEntryController (GiftEntryFactory, ItemFactory, $stateParams, $state) {
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
