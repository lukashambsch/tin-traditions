(function () {
  angular.module('app.item')
    .controller('SearchController', ['Tin', SearchController])
    .controller('ItemController', ['Tin', 'GiftEntry', 'Giver', 'Receiver', 'Location', '$stateParams', ItemController]);

  function SearchController (Tin) {
    var vm = this;
    vm.serialNumber = '';
    vm.findTins = findTins;

    findTins(vm.serialNumber);

    function findTins (serialNumber) {
      vm.tins = Tin.find({filter: {include: 'giftEntries', where: {serialNumber: {like: vm.serialNumber}}}});
    }
  }

  function ItemController (Tin, GiftEntry, Giver, Receiver, Location, $stateParams) {
    var vm = this;

    vm.editEntry = editEntry;
    vm.saveEntry = saveEntry;
    vm.cancelEntryEdit = cancelEntryEdit;
    getTin($stateParams.id);

    function editEntry (entry) {
      entry.edit = true;
    }

    function getTin (id) {
      vm.giftEntries = Tin.giftEntries({id: id}, function (entries) {
        entries.forEach(function (entry) {
          entry.date = new Date(entry.date);
        });
      });
    }

    function saveEntry (entry) {
      entry.edit = false;
      GiftEntry.prototype$updateAttributes({id: entry.id}, entry)
        .$promise.then(function (giftEntry) {
          console.log(giftEntry);
        });
    }

    function cancelEntryEdit (entry) {
      entry.edit = false;
    }
  }
})();
