module.exports = function(Tin) {
  Tin.validatesLengthOf('serialNumber', {is: 9, message: {is: 'Serial Number should be exactly 9 numbers long.'}})
  Tin.validatesLengthOf('pin', {is: 5, message: {is: 'PIN should be exactly 5 numbers long.'}})
  Tin.validateAsync('pin', pinValidator, {message: 'The PIN entered does not match the PIN for this tin.'});

  function pinValidator (error, done) {
    var base = this;
    dbTin = Tin.findOne({'id': base.id}, function (err, tin) {
      if (Object.keys(tin).length && base.pin !== tin.pin) error();
      done();
    });
  }
};
