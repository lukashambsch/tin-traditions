module.exports = function(app, cb) {
  /*
   * The `app` object provides access to a variety of LoopBack resources such as
   * models (e.g. `app.models.YourModelName`) or data sources (e.g.
   * `app.datasources.YourDataSource`). See
   * http://docs.strongloop.com/display/public/LB/Working+with+LoopBack+objects
   * for more info.
   */

  var products = [
    {
      name: 'Christmas Tin',
      description: 'Tin for christmas treats.',
      price: 19.95,
      quantity: 20,
      size: '2" x 2"',
      imageFilePath: 'img/product/tin.jpg'
    }
  ];

  var tin = {
    serialNumber: '123456789',
    pin: '12345',
    orderNumber: 'abcd',
    datePurchased: new Date()
  };

  products.forEach(function (product) {
    app.models.Product.findOne({where: {name: product.name}}, function (err, prod) {
      if (err) console.log(err);
      app.models.Product.upsert(prod || product, function (err, instance) {
        if (err) {
          throw err;
        } else {
          tin.productId = instance.id;
          console.log('Updated or created: ', instance);
          createTin(tin);
        }
      });
    });
  });
  process.nextTick(cb); // Remove if you pass `cb` to an async function yourself

  function createTin(tin) {
    app.models.Item.findOne({where: {serialNumber: tin.serialNumber}}, function (err, t) {
      if (err) console.log(err);
      app.models.Item.upsert(t || tin, function(err, instance) {
        if (err) {
          throw err;
        } else {
          console.log('Updated or created: ', instance);
        }
      });
    });
  }
};
