(function () {
  angular.module('app.item')
    .controller('SearchController', ['Item', SearchController])
    .controller('ItemController', ['Item', 'GiftEntry', '$stateParams', ItemController]);

  function SearchController (Item) {
    var vm = this;
    vm.serialNumber = '';
    vm.findItems = findItems;

    findItems(vm.serialNumber);

    function findItems (serialNumber) {
      vm.tins = Item.find({filter: {include: 'giftEntries', where: {serialNumber: {like: vm.serialNumber}}}});
    }
  }

  function ItemController (Item, GiftEntry, $stateParams) {
    var vm = this;

    getItem($stateParams.id);

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

    function saveEntry (entry) {
      GiftEntry.prototype$updateAttributes({id: entry.id}, entry)
        .$promise.then(function (giftEntry) {
          console.log(giftEntry);
        });
    }
  }
})();
