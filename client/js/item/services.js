(function () {
  angular.module('app.item')
    .factory('ItemFactory', ['Item', ItemFactory])
    .factory('GiftEntryFactory', ['GiftEntry', '$q', GiftEntryFactory]);

  function ItemFactory (Item) {

    ItemFactory.item = {};
    ItemFactory.items = [];
    ItemFactory.getItem = getItem;
    ItemFactory.findItems = findItems;

    return ItemFactory;

    function getItem (id) {
      return Item.findById({id: id, filter: {include: 'giftEntries'}}).$promise.then(function (item) {
        item.giftEntries.forEach(function (entry) {
          entry.date = new Date(entry.date);
        });
        ItemFactory.item = item;
      });
    }

    function findItems (serialNumber) {
      return Item.find({filter: {include: 'giftEntries', where: {serialNumber: {like: serialNumber}}}})
        .$promise.then(function (data) {
          ItemFactory.items = data;
        });
    }
  }

  function GiftEntryFactory (GiftEntry, $q) {
    GiftEntryFactory.giftEntry = {};
    GiftEntryFactory.getGiftEntry = getGiftEntry;
    GiftEntryFactory.createGiftEntry = createGiftEntry;
    GiftEntryFactory.saveGiftEntry = saveGiftEntry;

    return GiftEntryFactory;

    function getGiftEntry (id) {
      return GiftEntry.findById({id: id, filter: {include: 'item'}}).$promise.then(function (entry) {
        entry.date = new Date(entry.date);
        GiftEntryFactory.giftEntry = entry;
      });
    }

    function createGiftEntry (itemId) {
      GiftEntryFactory.giftEntry = {itemId: itemId};
      return GiftEntryFactory.giftEntry;
    }

    function saveGiftEntry (entry) {
      GiftEntry.upsert(entry).then(function (giftEntry) {
        $state.go('itemDetail', {id: giftEntry.itemId});
      });
    }
  }
})();