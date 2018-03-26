/**
 * Created by NiklausGeisser on 12/7/16.
 */
'use strict';
var mongoose = require('mongoose');
var User = mongoose.model('User');

//Mongo db methods for user
module.exports.create = function (req,res) {
    var user = new User({
      name : 'Niklauss',
      password : '123',
      admin : true
    });
  user.save(function (err, user) {
    if (err) {
      res.error(err);
    }
    else{
      res.send(user);
    }
  });
};

module.exports.getAll = function (req,res) {
  User.find(function (err,users) {
    if(err){
      res.error(err)
    }
    else{
      res.send(users)
    }
  })
};










