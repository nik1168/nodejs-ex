/**
 * Created by NiklausGeisser on 12/7/16.
 */
'use strict';
var mongoose = require('mongoose');
var User = mongoose.model('UserModel');

//Mongo db methods for user
module.exports.create = function (req,res) {
  if(User){
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
  }
  else{
    res.send('user is undefined')
  }

};

module.exports.getAll = function (req,res) {
  console.log("User");
  console.log(User);
  if(User){
    User.find(function (err,users) {
      if(err){
        console.log("Error Getting users!!");
        console.log(err);
        res.error(err)
      }
      else{
        console.log("Successful users");
        console.log(users);
        res.send(users)
      }
    })
  }
  else{
    res.send('user is undefined')
  }

};

module.exports.getTest = function (req,res) {
  res.send('test');
};











