/**
 * Created by NiklausGeisser on 12/7/16.
 */
'use strict';
var config = require('./../config'); //variable that contains all the constants
var mongoose = require('mongoose'); //mongoose module
module.exports = function () {
    var mongoURL = config.mongoUrl,
      mongoUser,
      mongoURLLabel = "";
  if (mongoURL == null && process.env.DATABASE_SERVICE_NAME) {
    var mongoServiceName = config.mongoServiceName,
      mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'],
      mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'],
      mongoDatabase = process.env[mongoServiceName + '_DATABASE'],
      mongoPassword = process.env[mongoServiceName + '_PASSWORD'],
      mongoUser = process.env[mongoServiceName + '_USER'];

    if (mongoHost && mongoPort && mongoDatabase) {
      mongoURLLabel = mongoURL = 'mongodb://';
      if (mongoUser && mongoPassword) {
        mongoURL += mongoUser + ':' + mongoPassword + '@';
      }
      // Provide UI label that excludes user id and pw
      mongoURLLabel += mongoHost + ':' + mongoPort + '/' + mongoDatabase;
      mongoURL += mongoHost + ':' +  mongoPort + '/' + mongoDatabase;

    }
  }
    var db = mongoose.connect(mongoURL);
    require('../components/user/model/user.model');
    return db;
};

