(function () {
  angular.module('app.item')
    .factory('ItemFactory', ['$http', 'Item', ItemFactory])
    .factory('GiftEntryFactory', ['GiftEntry', '$q', GiftEntryFactory]);

  function ItemFactory ($http, Item) {

    ItemFactory.item = {};
    ItemFactory.items = [];
    ItemFactory.getItem = getItem;
    ItemFactory.findItems = findItems;
    ItemFactory.linkToUser = linkToUser;
    ItemFactory.getItemsByUserId = getItemsByUserId;

    return ItemFactory;

    function getItem (id) {
      return Item.findById({id: id, filter: {include: ['giftEntries', 'product', 'users']}}).$promise.then(function (item) {
        item.giftEntries.forEach(function (entry) {
          entry.date = new Date(entry.date);
        });
        ItemFactory.item = item;
      });
    }

    function findItems (serialNumber) {
      return Item.find({filter: {include: ['giftEntries', 'users'], where: {serialNumber: {like: serialNumber}}}})
        .$promise.then(function (data) {
          ItemFactory.items = data;
        }, function (err) {
          ItemFactory.items = [];
        });
    }

    function linkToUser (itemId, userId) {
      var url = '/api/items/' + itemId + '/users/rel/' + userId;
      return $http.put(url).then(function (res) {
        return res.data;
      });
    }

    function getItemsByUserId (serialNumber, userId) {
      var filter = {include: ['giftEntries'], where: {serialNumber: {like: serialNumber}}};
      var where = {where: {serialNumber: {like: serialNumber}}};
      var filter = '?filter=[include]=giftEntries&filter=' + JSON.stringify(where);
      var url = '/api/users/' + userId + '/items' + filter;
      return $http.get(url).then(function (res) {
        ItemFactory.items = res.data;
      }, function (err) {
        ItemFactory.items = [];
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

    function saveGiftEntry () {
      return GiftEntry.upsert(GiftEntryFactory.giftEntry).$promise.then(function (giftEntry) {
        GiftEntryFactory.giftEntry = giftEntry;
      });
    }
  }
})();
