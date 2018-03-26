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

module.exports = app;

// initDb(function (err) {
//   console.log('Error connecting to Mongo. Message:\n' + err);
// });

// mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
// mongoURLLabel = "";

// if (mongoURL == null && process.env.DATABASE_SERVICE_NAME) {
//   var mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase(),
//     mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'],
//     mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'],
//     mongoDatabase = process.env[mongoServiceName + '_DATABASE'],
//     mongoPassword = process.env[mongoServiceName + '_PASSWORD']
//   mongoUser = process.env[mongoServiceName + '_USER'];
//
//   if (mongoHost && mongoPort && mongoDatabase) {
//     mongoURLLabel = mongoURL = 'mongodb://';
//     if (mongoUser && mongoPassword) {
//       mongoURL += mongoUser + ':' + mongoPassword + '@';
//     }
//     // Provide UI label that excludes user id and pw
//     mongoURLLabel += mongoHost + ':' + mongoPort + '/' + mongoDatabase;
//     mongoURL += mongoHost + ':' + mongoPort + '/' + mongoDatabase;
//
//   }
// }
// var db = null,
//   dbDetails = new Object();
//
// var initDb = function (callback) {
//   if (mongoURL == null) return;
//
//   var mongodb = require('mongodb');
//   if (mongodb == null) return;
//
//   mongodb.connect(mongoURL, function (err, conn) {
//     if (err) {
//       callback(err);
//       return;
//     }
//
//     db = conn;
//     dbDetails.databaseName = db.databaseName;
//     dbDetails.url = mongoURLLabel;
//     dbDetails.type = 'MongoDB';
//
//     console.log('Connected to MongoDB at: %s', mongoURL);
//   });
// };

// app.get('/', function (req, res) {
//   // try to initialize the db on every request if it's not already
//   // initialized.
//   if (!db) {
//     initDb(function (err) {
//     });
//   }
//   if (db) {
//     var col = db.collection('counts');
//     // Create a document with request IP and current time of request
//     col.insert({ip: req.ip, date: Date.now()});
//     col.count(function (err, count) {
//       if (err) {
//         console.log('Error running count. Message:\n' + err);
//       }
//       res.render('index.html', {pageCountMessage: count, dbInfo: dbDetails});
//     });
//   } else {
//     res.render('index.html', {pageCountMessage: null});
//   }
// });

app.get('/pagecount', function (req, res) {
  res.send('{ pageCount: -1 }');
});


