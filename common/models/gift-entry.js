var loopback = require('loopback');
var Item = loopback.getModel('Item');

var errorMessage = 'The PIN entered does not match the PIN for this item.';

module.exports = function(GiftEntry) {

  GiftEntry.validateAsync('pin', pinValidator, {message: errorMessage});
  GiftEntry.remoteMethod('checkPin', {
    http: {path: '/check-pin'},
    accepts: {arg: 'giftEntry', type: 'object'},
    returns: [
      {arg: 'valid', type: 'boolean'},
      {arg: 'errorMessage', type: 'string'}
    ]
  });

  function pinValidator (error, done) {
    var base = this;
    entry = base.toJSON();
    dbItem = Item.findOne({id: entry.itemId}, function (err, item) {
      if (err) throw err;
      if (base.pin != item.pin) error();
      base.pin = '';
      done();
    });
  }

  GiftEntry.checkPin = function checkPin (giftEntry, cb) {
    var valid = false;
    Item.findById(giftEntry.itemId, function (err, item) {
      if (item && item.pin == giftEntry.pin) {
        valid = true;
      }
      var errMsg = valid ? '' : errorMessage;
      cb(null, valid, errMsg);
    });
  };

};
