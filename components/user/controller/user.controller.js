'use strict';
var mongoose = require('mongoose');
var User = mongoose.model('User');

//Create a new user
module.exports.create = function (req, res) {
  var user = initUser(req.body);
  user.save(function (err, user) {
    if (err) {
      res.error(err);
    }
    else {
      res.send(user);
    }
  });
};

// Retrieve all users
module.exports.getAll = function (req, res) {
  User.find(function (err, users) {
    if (err) {
      res.error(err)
    }
    else {
      res.send(users)
    }
  })
};

/**
 * Init user based on the request payload
 * @param payload
 * @returns {Model}
 */
function initUser(payload){
  var user = {
    name: 'Niklauss',
    password: '123',
    admin: true
  };
  return new User(user)
}












