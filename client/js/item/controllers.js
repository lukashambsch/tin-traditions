(function () {
  angular.module('app.item')
    .controller('SearchController', ['Item', SearchController])
    .controller('ItemController', ['Item', 'GiftEntry', '$stateParams', ItemController])
    .controller('GiftEntryController', ['GiftEntry', '$stateParams', GiftEntryController]);

  function SearchController (Item) {
    var vm = this;
    vm.serialNumber = '';
    vm.findItems = findItems;

    findItems(vm.serialNumber);

    function findItems (serialNumber) {
      vm.items = Item.find({filter: {include: 'giftEntries', where: {serialNumber: {like: vm.serialNumber}}}});
    }
  }

  function ItemController (Item, GiftEntry, $stateParams) {
    var vm = this;

    vm.itemId = $stateParams.id;

    getItem(vm.itemId);

    function getItem (id) {
      vm.giftEntries = Item.giftEntries({id: id}, function (entries) {
        entries.forEach(function (entry) {
          entry.date = new Date(entry.date);
        });
      });
    }

  }

  function GiftEntryController (GiftEntry, $stateParams) {
    var vm = this;

    vm.saveEntry = saveEntry;
    vm.create = true;
    getGiftEntry($stateParams.id);

    function getGiftEntry (id) {
      if (id) {
        vm.giftEntry = GiftEntry.findById({id: id}, function (entry) {
          entry.date = new Date(entry.date);
        });
        vm.create = false;
      } else {
        vm.giftEntry = {itemId: $stateParams.itemId};
      }
    }

    function saveEntry (entry) {
      if (vm.create) {
        GiftEntry.create(entry, function (giftEntry) {
          console.log(giftEntry);
        });
      } else {
        entry.$save(function (giftEntry) {
          console.log(giftEntry);
        });
      }
    }
  }
})();
