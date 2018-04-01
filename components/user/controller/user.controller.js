'use strict';
var User = require('../model/user.model').user;

/**
 * Creates a new user
 * @param req
 * @param res
 */
module.exports.create = function (req, res) {
  var user = User.build(initUser(req.body));
  user.add(function (success) {
      var user = success.dataValues;
      res.json({
        message: 'User created!',
        data: user
      });
    },
    function (error) {
      res.status(500).send("Error creating user");
    })
};

/**
 * Gets all roles
 * @param req
 * @param res
 */
module.exports.getAll = function (req, res) {
  var user = User.build();
  user.retrieveAll(function(roles) {
    if (roles) {
      res.json({
        message : "success",
        data : roles
      });
    } else {
      res.status(404).send("No users were found");
    }
  }, function(error) {
    console.log("ERROR");
    console.log(error);
    res.status(404).send("Error getting users");
  });
};

/**
 * Updates a user based on an ID
 * @param req
 * @param res
 */
module.exports.update = function (req,res) {
  var user = User.build();
  updateUser(user,req.body);
  user.updateById(req.params.role_id, function(success) {
    var user = success.dataValues;
    if (success) {
      res.json({
        message: 'User updated!',
        data : user
      });
    } else {
      res.status(404).send("User not found");
    }
  }, function(error) {
    res.status(404).send("Error updating user");
  });
};

/**
 * Gets a single user
 * @param req
 * @param res
 */
module.exports.getById = function (req,res) {
  var user = User.build();
  user.retrieveById(req.params.role_id, function(user) {
    if (user) {
      res.json({
        message : "success",
        data : user
      });
    } else {
      res.status(404).send("User not found");
    }
  }, function(error) {
    res.status(404).send("Error getting user");
  });
};

/**
 * Delete a user by id
 * @param req
 * @param res
 */
module.exports.delete = function (req,res) {
  var user = User.build();
  user.removeById(req.params.role_id, function(user) {
    if (user) {
      res.json({
        message: 'User removed!'
      });
    } else {
      res.status(404).send("User not found");
    }
  }, function(error) {
    res.status(404).send("Error removing user");
  });
};

/**
 * Gets user by token
 * @param req
 * @param res
 */
module.exports.getByToken = function (req,res) {
  var user = User.build();
  user.retrieveByToken(req.params.token, function(user) {
    if (user) {
      res.json({
        message : "success",
        data : user
      });
    } else {
      res.status(404).send("User not found");
    }
  }, function(error) {
    res.status(404).send("Error getting user");
  });
};

/**
 * Gets user by username
 * @param req
 * @param res
 */
module.exports.getUserByUsername = function (req,res) {
  var user = User.build();
  user.retrieveByUsername(req.body.username,function (user) {
    if (user) {
      res.json({
        message : "success",
        data : user
      });
    } else {
      res.status(404).send("User not found");
    }

  },function (error) {
    res.status(404).send("Error getting user");
  })

};


/**
 * Init a user
 * @param payload
 * @returns {{name: string}}
 */
function initUser(payload) {
  return {
    name : payload.name || '',
    lastName : payload.lastName || '',
    birthDate : payload.birthDate || '',
    token : payload.token || '',
    username: payload.username || '',
    password: payload.password || '',
    email : payload.email || '',
    gender : payload.gender || '',
    firstTime : payload.firstTime || '',
    role_id : payload.role_id,
    image : payload.image,
    createdAt : Date.now(),
    modifiedAt : Date.now()
  }
}

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













