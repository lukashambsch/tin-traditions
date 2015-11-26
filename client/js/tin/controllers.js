(function () {
  angular.module('app.tin')
    .controller('SearchController', ['Tin', SearchController])
    .controller('TinController', ['Tin', 'GiftEntry', 'Giver', 'Receiver', 'Location', '$stateParams', TinController]);

  function SearchController (Tin) {
    var vm = this;
    vm.serialNumber = '';
    vm.findTins = findTins;

    findTins(vm.serialNumber);

    function findTins (serialNumber) {
      vm.tins = Tin.find({filter: {include: 'giftEntries', where: {serialNumber: {like: vm.serialNumber}}}});
    }
  }

  function TinController (Tin, GiftEntry, Giver, Receiver, Location, $stateParams) {
    var vm = this;

    vm.editEntry = editEntry;
    vm.saveEntry = saveEntry;
    vm.cancelEntryEdit = cancelEntryEdit;
    getTin($stateParams.serialNumber);

    function editEntry (entry) {
      entry.edit = true;
    }

    function getTin (serialNumber) {
      vm.tin = Tin.findOne({filter: {include: 'giftEntries', where: {serialNumber: $stateParams.serialNumber}}},
        function (tin) {
          tin.giftEntries.forEach(function(entry) {
            entry.date = new Date(entry.date);
            entry.giver = getGiver(entry);
            entry.receiver = getReceiver(entry);
            entry.edit = false;
          });
        });
    }

    function getGiver (entry) {
      Giver.findOne({id: entry.giverId}, function (giver) {
        Location.findOne({id: giver.locationId}, function (location) {
         giver.location = location;
         entry.giver = giver;
        });
      });
    }

    function getReceiver (entry) {
      Receiver.findOne({id: entry.receiverId}, function (receiver) {
        Location.findOne({id: receiver.locationId}, function (location) {
         receiver.location = location;
         entry.receiver = receiver;
        });
      });
    }

    function saveEntry (entry, giver, giverLocation, receiver, receiverLocation) {
      GiftEntry.prototype$updateAttributes({id: entry.id}, entry)
        .$promise.then(function (giftEntry) {
          console.log(giftEntry);
          entry.edit = false;
        });
      Giver.prototype$updateAttributes({id: giver.id}, giver)
        .$promise.then(function (savedGiver) {
          console.log(savedGiver);
        });
      Location.prototype$updateAttributes({id: giverLocation.id}, giverLocation)
        .$promise.then(function (savedGiverLocation) {
          console.log(savedGiverLocation);
        });
      Receiver.prototype$updateAttributes({id: receiver.id}, receiver)
        .$promise.then(function (savedReceiver) {
          console.log(savedReceiver);
        });
      Location.prototype$updateAttributes({id: receiverLocation.id}, receiverLocation)
        .$promise.then(function (savedReceiverLocation) {
          console.log(savedReceiverLocation);
        });
    }

    function cancelEntryEdit (entry) {
      entry.edit = false;
    }
  }
})();
