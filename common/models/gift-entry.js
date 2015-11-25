var loopback = require('loopback');
var Tin = loopback.getModel('Tin');

module.exports = function(GiftEntry) {
  GiftEntry.validateAsync('pin', pinValidator, {message: 'The PIN entered does not match the PIN for this tin.'});

  function pinValidator (error, done) {
    var base = this;
    entry = base.toJSON();
    dbTin = Tin.findOne({id: entry.tinId}, function (err, tin) {
      if (base.pin != tin.pin) error();
      done();
    });
  }

};
