var loopback = require('loopback');
var Item = loopback.getModel('Item');

module.exports = function(GiftEntry) {
  GiftEntry.validateAsync('pin', pinValidator, {message: 'The PIN entered does not match the PIN for this item.'});

  function pinValidator (error, done) {
    console.log('validating');
    var base = this;
    entry = base.toJSON();
    dbItem = Item.findOne({id: entry.itemId}, function (err, item) {
      if (base.pin != item.pin) error();
      base.pin = '';
      done();
    });
  }

};
