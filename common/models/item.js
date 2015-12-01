module.exports = function(Item) {
  Item.validatesLengthOf('serialNumber', {is: 9, message: {is: 'Serial Number should be exactly 9 numbers long.'}})
  Item.validatesLengthOf('pin', {is: 5, message: {is: 'PIN should be exactly 5 numbers long.'}})
  Item.validateAsync('pin', pinValidator, {message: 'The PIN entered does not match the PIN for this item.'});

  function pinValidator (error, done) {
    var base = this;
    dbItem = Item.findOne({'id': base.id}, function (err, item) {
      if (item && Object.keys(item).length && base.pin !== item.pin) error();
      done();
    });
  }
};
