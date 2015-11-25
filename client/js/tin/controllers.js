(function () {
  angular.module('app.tin')
    .controller('SearchController', ['Tin', SearchController])
    .controller('TinController', ['Tin', 'Giver', 'Receiver', 'Location', '$stateParams', TinController]);

  function SearchController (Tin) {
    var vm = this;
    vm.serialNumber = '';
    vm.findTins = findTins;

    findTins(vm.serialNumber);

    function findTins (serialNumber) {
      vm.tins = Tin.find({filter: {include: 'giftEntries', where: {serialNumber: {like: vm.serialNumber}}}});
    }
  }

  function TinController (Tin, Giver, Receiver, Location, $stateParams) {
    var vm = this;

    getTin($stateParams.serialNumber);

    function getTin (serialNumber) {
      vm.tin = Tin.findOne({filter: {include: 'giftEntries', where: {serialNumber: $stateParams.serialNumber}}},
        function (tin) {
          tin.giftEntries.forEach(function(entry) {
            entry.giver = getGiver(entry);
            entry.receiver = getReceiver(entry);
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
  }
})();
