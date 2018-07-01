'use strict';
var User = require('../../user/model/user.model').user;
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../../../config');
module.exports.authenticate = function (req,res) {
     var userBuild = User.build();
  userBuild.retrieveByUsernameAndPassword(req.body.username,req.body.password,function (user) {
      if(!user){
        res.status(404).json({ success: false, message: 'Authentication failed. User not found.' });
      }else{
        var userResponse = user.dataValues;
        delete userResponse.token;
        var token = jwt.sign(userResponse, config.secret, {
          expiresIn: 1440 // expires in 24 hours
        });
        updateUser(userBuild,{token : token});
        userBuild.updateById(userResponse.id, function () {
          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }, function (error) {
          res.status(404).json({ success: false, message: error.toString() });
        })
      }
    },function (error) {
      res.status(404).json({ success: false, message: error.toString() });
    });
};

module.exports.renewToken = function (req,res) {
  var userBuild = User.build();
  userBuild.retrieveByToken(req.body.token, function (user) {
    if(!user){
      res.status(404).json({ success: false, message: 'Authentication failed. User not found.' });
    }else{
      var userResponse = user.dataValues;
      delete userResponse.token;
      var token = jwt.sign(userResponse, config.secret, {
        expiresIn: 1440 // expires in 24 hours
      });
      updateUser(userBuild,{token : token});
      userBuild.updateById(userResponse.id, function () {
        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }, function () {
        res.status(404).json({ success: false, message: error.toString() });
      })
    }
  }, function (error) {
    res.status(404).json({ success: false, message: error.toString() });
  })
};

/**
 * Updates properties of current user based on payload (not a pure function);
 * @param user
 * @param payload
 */
function updateUser(user, payload){
  user.name = payload.name;
  user.lastName = payload.lastName;
  user.birthDate = payload.birthDate;
  user.token = payload.token;
  user.username = payload.username;
  user.password = payload.password;
  user.email = payload.email;
  user.gender = payload.gender;
  user.firstTime = payload.firstTime;
  user.role_id = payload.role_id;
  user.image = payload.image;
  user.createdAt = payload.createdAt;
  user.modifiedAt = Date.now();
}

