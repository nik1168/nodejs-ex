// Pier fitness backend
var express = require('express'),
  app = express(), // Express instance
  path = require('path'),
  morgan = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'), // Body parser for api requests
  cors = require('cors'), // Handle CORS
  config = require('./config'), // Config variables
  mongoose = require('./config/mongoose'), // Mongoose configuration
  db = mongoose(); // Db connection instance
  Object.assign = require('object-assign');

// Routes for app
var userRoute = require('./components/user/route/user.route'); // Routes for users


// app configuration
app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false,limit:'50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));
app.set('superSecret', config.secret); // secret variable


// Main Route
app.get('/', function (req, res) {
  console.log("testing the debug");
  console.log("test");
  res.send("hola");
});

// Page count route
app.get('/pagecount', function (req, res) {
  res.send('{ pageCount: -1 :) }');
});

//API
app.use('/users', userRoute);


// error handling
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
  ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

/**
 * Init connection to mongo database
 * @param success
 * @param error
 */
function initDb(success,error){
  db.then(function(){
    if(success){
      success()
    }
  },function (err) {
    if(error){
      error(err)
    }
  })
}

module.exports = app;




