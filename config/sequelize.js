/**
 * Created by NiklausGeisser on 1/2/17.
 */
'use strict';
var Sequelize = require('sequelize');
var config = require('./../config');
console.log("INITIAL CONFIGURATION");
console.log(config);

//Connection variable for openshift environment deploy
var db = new Sequelize(config.database, config.user, config.password,{
  host : config.host,
  port : config.mysqlPort,
  logging: console.log,
  define: {
    logging: console.log,
    timestamps: false
  }
});

module.exports.db=db;
