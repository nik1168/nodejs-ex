var swaggerJSDoc = require('swagger-jsdoc');
var config = require('./../config');
// swagger definition

module.exports = function () {
  var swaggerDefinition = {
    info: {
      title: 'Smart Fit API',
      version: '0.1.0',
      description: 'API for smartfit mobile application',
      contact : 'ngeisser32@gmail.com',
      license : "MIT"
    },
    host: config.hostName || '0.0.0.0:8080',
    basePath: '/',
    securityDefinitions: {
      api_key : {
        type : 'apiKey',
        name : 'x-api-key',
        in : 'header'
      }
    }
  };

// options for the swagger docs
  var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: [
      './components/user/route/user.route.js',
      './components/day/route/day.route.js',
      './components/category/route/category.route.js',
      './components/device/route/device.route.js',
      './components/diet/route/diet.route.js',
      './components/exercise/route/exercise.route.js',
      './components/exercise_has_muscle/route/exercise_has_muscle.route.js',
      './components/muscular_group/route/muscular_group.route.js',
      './components/os/route/os.route.js',
      './components/post/route/post.route.js',
      './components/login/route/login.route.js',
      './components/role/route/role.route.js'
    ]
  };

  return swaggerJSDoc(options);
};

