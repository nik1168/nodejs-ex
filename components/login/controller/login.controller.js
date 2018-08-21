'use strict';
var User = require('../../user/model/user.model').user;
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../../../config');
var utilsService = require('../../../utils/utils.service');
var restClient = require('../../../utils/restClient.service');

/**
 * Authenticate user
 * @param req
 * @param res
 */
module.exports.authenticate = function (req, res) {
  var userBuild = User.build();
  userBuild.retrieveByUsernameAndPassword(req.body.username, req.body.password, function (user) {
    if (!user) {
      res.status(404).json({success: false, message: 'Authentication failed. User not found.'});
    } else {
      var userResponse = user.dataValues;
      var token = signToken(userResponse);
      updateUser(userBuild, {token: token});
      userBuild.updateById(userResponse.id, function () {
        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }, function (error) {
        res.status(404).json({success: false, message: error.toString()});
      })
    }
  }, function (error) {
    res.status(404).json({success: false, message: error.toString()});
  });
};

/**
 * Renew user token
 * @param req
 * @param res
 */
module.exports.renewToken = function (req, res) {
  var userBuild = User.build();
  userBuild.retrieveByToken(req.body.token, function (user) {
    if (!user) {
      res.status(404).json({success: false, message: 'Authentication failed. User not found.'});
    } else {
      var userResponse = user.dataValues;
      var token = signToken(userResponse);
      updateUser(userBuild, {token: token});
      userBuild.updateById(userResponse.id, function () {
        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }, function () {
        res.status(404).json({success: false, message: error.toString()});
      })
    }
  }, function (error) {
    res.status(404).json({success: false, message: error.toString()});
  })
};

/**
 * Get user information
 * @param req
 * @param res
 */
module.exports.getFacebookUserInfo = function (req, res) {
  var ACCESS_TOKEN = req.body.access_token;
  var requestInfo = ['name', 'gender', 'picture', 'birthday', 'first_name', 'last_name', 'email'];
  var url = config.oauthFacebookInfo + '?' + 'access_token=' + ACCESS_TOKEN + '&fields=' + utilsService.getFacebookInfoRequestString(requestInfo);
  var userBuild = User.build();
  restClient.getFBUserInfo(url)
    .then(function (response) {
      var userFacebook = response.data;
      var userFacebookProfilePicture = userFacebook.picture.data.url;
      userBuild.retrieveByEmail(userFacebook.email, function (user) {
          var userResponse = user.dataValues;
          var token = signToken(userResponse);
          updateUser(userBuild, {token: token, image: userFacebookProfilePicture});
          userBuild.updateById(userResponse.id, function () {
            // return the information including token as JSON
            res.json({
              success: true,
              message: 'Enjoy your token!',
              token: token
            });
          }, function () {
            res.status(404).json({success: false, message: error.toString()});
          })
        },
        function (error) {
          res.status(404).json({success: false, message: error.toString()});
        });
    })
    .catch(function (error) {
      res.status(404).json({success: false, message: error.toString()});
    })
};

/**
 * Sign jwt token
 * @param user
 * @returns {*}
 */
function signToken(user){
  if(user && user.token){
    delete user.token
  }
  return jwt.sign(user, config.secret, {
    expiresIn: 1440 // expires in 24 hours
  });
}

/**
 * Updates properties of current user based on payload (not a pure function);
 * @param user
 * @param payload
 */
function updateUser(user, payload) {
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

