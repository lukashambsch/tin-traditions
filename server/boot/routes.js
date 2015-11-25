module.exports = function (app) {
  var router = app.loopback.Router();

  router.get('', function (req, res) {
    res.render('index');
  });

  router.get('/tins', function (req, res) {
    res.render('app');
  });

  app.use(router);
};
