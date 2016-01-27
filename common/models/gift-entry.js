var loopback = require('loopback');
var Item = loopback.getModel('Item');
var errorMessage = 'This user is not able to add entries to this item. Please link the item first.';

module.exports = function(GiftEntry) {

  //GiftEntry.validateAsync('pin', pinValidator, {message: errorMessage});
  GiftEntry.validateAsync('item', userValidator, {message: errorMessage});
  //GiftEntry.remoteMethod('checkPin', {
    //http: {path: '/check-pin'},
    //accepts: {arg: 'giftEntry', type: 'object'},
    //returns: [
      //{arg: 'valid', type: 'boolean'},
      //{arg: 'errorMessage', type: 'string'}
    //]
  //});

  //function pinValidator (error, done) {
    //var base = this;
    //var entry = base.toJSON();
    //dbItem = Item.findOne({id: entry.itemId}, function (err, item) {
      //if (err) throw err;
      //if (base.pin != item.pin) error();
      //base.pin = '';
      //done();
    //});
  //}

  //GiftEntry.checkPin = function checkPin (giftEntry, cb) {
    //var valid = false;
    //Item.findById(giftEntry.itemId, function (err, item) {
      //if (item && item.pin == giftEntry.pin) {
        //valid = true;
      //}
      //var errMsg = valid ? '' : errorMessage;
      //cb(null, valid, errMsg);
    //});
  //};

  function userValidator (error, done) {
    var base = this;
    var giftEntry = base.toJSON();
    var valid = false;
    var ctx = loopback.getCurrentContext();
    var user = ctx.get('currentUser');
    var userId = user.id.toString();
    console.log(userId);
    Item.findById(giftEntry.itemId, {include: 'users'}, function (err, item) {
      if (err) throw err;
      if (item && item.users) {
        item.users.getAsync()._result.forEach(function (usr) {
          if (usr.id == userId) {
            valid = true;
          }
        });
      }
      if (!valid) error();
      done();
    });
  };
};
