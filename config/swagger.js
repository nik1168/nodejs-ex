var swaggerJSDoc = require('swagger-jsdoc');
// swagger definition

module.exports = function () {
  var swaggerDefinition = {
    info: {
      title: 'Smart Fit API',
      version: '1.0.0',
      description: 'This is the API for smartfit papa'
    },
    host: '0.0.0.0:8080',
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
      './components/day/route/day.route.js'
    ]
  };

  var docs = swaggerJSDoc(options);
  return docs;
};

