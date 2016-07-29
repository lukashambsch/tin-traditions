var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');

var app = module.exports = loopback();

// Passport configurators
var loopbackPassport = require('loopback-component-passport');
var PassportConfigurator = loopbackPassport.PassportConfigurator;
var passportConfigurator = new PassportConfigurator(app);

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var flash = require('express-flash');

// Setup the view engine (jade)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// attempt to build the provides/passport config
var config = {};
try {
  config = require('../providers.json');
} catch (err) {
  console.trace(err);
  process.exit(1); // fatal
}

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;
});

// to support JSON-encoded bodies
app.middleware('parse', bodyParser.json());
// to support URL-encoded bodies
app.middleware('parse', bodyParser.urlencoded({
  extended: true
}));

// The access token is only available after boot
app.middleware('auth', loopback.token({
  model: app.models.accessToken
}));

app.middleware('session:before', cookieParser(config['google-login'].clientSecret));
app.middleware('session', session({
  secret: 'kitty',
  saveUninitialized: true,
  resave: true
}));
passportConfigurator.init();

// We need flash messages to see passport errors
app.use(flash());

// Enables getting current context
app.use(loopback.context());
app.use(function (req, res, next) {
  if (!req.accessToken) return next();
  // console.log(req.accessToken.userId);
  app.models.User.findById(req.accessToken.userId, function(err, user) {
    if (err) return next(err);
    if (!user) return next(new Error('No user with this access token was found.'));
    res.locals.currentUser = user;
    var loopbackContext = loopback.getCurrentContext();
    if (loopbackContext) loopbackContext.set('currentUser', user);
    next();
  });
});

passportConfigurator.setupModels({
  userModel: app.models.User,
  userIdentityModel: app.models.UserIdentity,
  userCredentialModel: app.models.UserCredential
});
for (var s in config) {
  var c = config[s];
  c.session = c.session !== false;
  passportConfigurator.configureProvider(s, c);
}
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

app.get('/auth/account', ensureLoggedIn('/#/login'), function (req, res, next) {
  var User = loopback.getModel('user');
  User.findOne({id: req.user.id}, function (user) {
    console.log(user);
  });
  res.send(req.user);
});

// start the server if `$ node server.js`
if (require.main === module)
  app.start();
