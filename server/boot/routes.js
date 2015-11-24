module.exports = function (app) {
  var router = app.loopback.Router();

  router.get('/', function (req, res) {
    res.render('index', {
      loginFailed: false
    });
  });

  router.get('/app', function (req, res) {
    res.render('app', {
      loginFailed: false
    });
  });

  app.use(router);
};
