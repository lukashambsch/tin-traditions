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
  ]

  products.forEach(function (product) {
    app.models.Product.findOne({where: {name: product.name}}, function (err, prod) {
      if (err) console.log(err);
      app.models.Product.upsert(prod || product, function (err, instance) {
        if (err) {
          throw err;
        } else {
          console.log('Updated or created: ', instance);
        }
      });
    });
  });
  process.nextTick(cb); // Remove if you pass `cb` to an async function yourself
};
