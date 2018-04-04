'use strict';
var User = require('../../user/model/user.model').user;
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../../../config');
module.exports.authenticate = function (req,res) {
     var user = User.build();
    user.retrieveByUsernameAndPassword(req.body.username,req.body.password,function (response) {
      console.log("success retrieve by token");
      console.log(response);
      if(!response){
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      }else{
        var user = response.dataValues;
        // if(user.password != req.body.password){
        //   res.json({ success: false, message: 'Authentication failed. User not found.' });
        // }else{
        //   var token = jwt.sign(user, config.secret, {
        //     expiresIn: 1440 // expires in 24 hours
        //   });
        //
        //   // return the information including token as JSON
        //   res.json({
        //     success: true,
        //     message: 'Enjoy your token!',
        //     token: token
        //   });
        //
        // }
        var token = jwt.sign(user, config.secret, {
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
      res.json({ success: false, message: ''+error });
    });
};

