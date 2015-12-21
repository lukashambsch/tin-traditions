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
      imageFilePath: 'theme/img/portfolio/1.jpg'
    }
  ]

  products.forEach(function (product) {
    app.models.Product.findOrCreate({where: {name: product.name}}, product, function (err, instance) {
      console.log('Created: ', instance);
    });
  });
  process.nextTick(cb); // Remove if you pass `cb` to an async function yourself
};
