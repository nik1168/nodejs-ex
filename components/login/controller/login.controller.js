'use strict';
var User = require('../../user/model/user.model').user;
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../../../config');
module.exports.authenticate = function (req,res) {
     var user = User.build();
    user.retrieveByUsernameAndPassword(req.body.username,req.body.password,function (user) {
      console.log("success retrieve by username and password");
      console.log(user);
      if(!user){
        res.status(404).json({ success: false, message: 'Authentication failed. User not found.' });
      }else{
        var userReponse = user.dataValues;
        var token = jwt.sign(userReponse, config.secret, {
          expiresIn: 1440 // expires in 24 hours
        });
        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });

      }
    },function (error) {
      res.status(404).json({ success: false, message: ''+error });
    });
};

