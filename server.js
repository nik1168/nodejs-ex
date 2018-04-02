'use strict';
// Pier fitness backend
var express = require('express'),
  app = express(), // Express instance
  path = require('path'),
  morgan = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'), // Body parser for api requests
  cors = require('cors'), // Handle CORS
  config = require('./config'); // Config variables
  Object.assign = require('object-assign');

// Routes for app
var userRoute = require('./components/user/route/user.route'); // Routes for users
var roleRoute = require('./components/role/route/role.route'); // Routes for roles
var deviceRoute = require('./components/device/route/device.route'); // Routes for devices
var muscleRoute = require('./components/muscle/route/muscle.route'); // Routes for muscles
var categoryRoute = require('./components/category/route/category.route'); // Routes for categories
var dayRoute = require('./components/day/route/day.route'); // Routes for days
var dietRoute = require('./components/diet/route/diet.route'); // Routes for diets
var exerciseRoute = require('./components/exercise/route/exercise.route'); // Routes for exercises
var exerciseHasMuscleRoute = require('./components/exercise_has_muscle/route/exercise_has_muscle.route'); // Routes for exercises has muscles
var muscularGroupRoute = require('./components/muscular_group/route/muscular_group.route'); // Routes for muscular groups
var osRoute = require('./components/os/route/os.route'); // Routes for os
var postRoute = require('./components/post/route/post.route'); // Routes for posts
var routineRoute = require('./components/routine/route/routine.route'); // Routes for routines
var routineHasExerciseRoute = require('./components/routine_has_exercise/route/routine_has_exercise.route'); // Routes for routines has exercises
var userHasDietRoute = require('./components/user_has_diet/route/user_has_diet.route'); // Routes for user has diets
var userHasRoutineRoute = require('./components/user_has_routine/route/user_has_routine.route'); // Routes for user has routines



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
  res.send("hola");
});

// Page count route
app.get('/pagecount', function (req, res) {
  res.send('{ pageCount: -1 :) }');
});

//API
app.use('/user', userRoute);
app.use('/role', roleRoute);
app.use('/device', deviceRoute);
app.use('/muscle', muscleRoute);
app.use('/category', categoryRoute);
app.use('/day', dayRoute);
app.use('/diet', dietRoute);
app.use('/exercise', exerciseRoute);
app.use('/exerciseHasMuscle', exerciseHasMuscleRoute);
app.use('/muscularGroup', muscularGroupRoute);
app.use('/os', osRoute);
app.use('/post', postRoute);
app.use('/routine', routineRoute);
app.use('/routineHasExercise', routineHasExerciseRoute);
app.use('/userHasDiet', userHasDietRoute);
app.use('/userHasRoutine', userHasRoutineRoute);


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




