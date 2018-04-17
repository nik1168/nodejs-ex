'use strict';
var User = require('../model/user.model').user;
var initUser = require('../model/user.model').initUser;

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
      res.status(404).json({
        message: 'Error creating user',
        error: error
      });
    })
};

/**
 * Gets all users
 * @param req
 * @param res
 */
module.exports.getAll = function (req, res) {
  var user = User.build();
  user.retrieveAll(function(users) {
    if (users) {
      res.json({
        message : "success",
        data : users
      });
    } else {
      res.status(404).json({
        message: 'No users were found',
        error: ''
      });
    }
  }, function(error) {
    res.status(404).json({
      message: 'Error getting users',
      error: error
    });
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
  user.updateById(req.params.user_id, function(success) {
    var user = success.dataValues;
    if (success) {
      res.json({
        message: 'User updated!',
        data : user
      });
    } else {
      res.status(404).json({
        message: 'User not found',
        error: ''
      });
    }
  }, function(error) {
    res.status(404).json({
      message: 'Error updating user',
      error: error
    });
  });
};

/**
 * Gets a single user
 * @param req
 * @param res
 */
module.exports.getById = function (req,res) {
  var user = User.build();
  user.retrieveById(req.params.user_id, function(user) {
    if (user) {
      res.json({
        message : "success",
        data : user
      });
    } else {
      res.status(404).json({
        message: 'User not found',
        error: ''
      });
    }
  }, function(error) {
    res.status(404).json({
      message: 'Error getting user',
      error: error
    });
  });
};

/**
 * Delete a user by id
 * @param req
 * @param res
 */
module.exports.delete = function (req,res) {
  var user = User.build();
  user.removeById(req.params.user_id, function(user) {
    if (user) {
      res.json({
        message: 'User removed!'
      });
    } else {
      res.status(404).json({
        message: 'User not found',
        error: ''
      });
    }
  }, function(error) {
    res.status(404).json({
      message: 'Error removing user',
      error: error
    });
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
      res.status(404).json({
        message: 'User not found',
        error: ''
      });
    }
  }, function(error) {
    res.status(404).json({
      message: 'Error getting user',
      error: error
    });
  });
};

/**
 * Gets user by username
 * @param req
 * @param res
 */
module.exports.getUserByUsername = function (req,res) {
  var user = User.build();
  user.retrieveByUsername(req.query.username,function (user) {
    if (user) {
      res.json({
        message : "success",
        data : user
      });
    } else {
      res.status(404).json({
        message: 'User not found',
        error: ''
      });
    }

  },function (error) {
    res.status(404).json({
      message: 'Error getting user',
      error: error
    });
  })

};

/**
 * Gets user by username and password
 * @param req
 * @param res
 */
module.exports.getUserByUsernameAndPassword = function (req,res) {
  var user = User.build();
  user.retrieveByUsernameAndPassword(req.body.username, req.body.password, function (user) {
    if (user) {
      res.json({
        message : "success",
        data : user
      });
    } else {
      res.status(404).json({
        message: 'User not found',
        error: ''
      });
    }

  },function (error) {
    res.status(404).json({
      message: 'Error getting user',
      error: error
    });
  })

};

/**
 * Retrieve Routine by user id
 * @param req
 * @param res
 */
module.exports.retrieveRoutineByUserId = function (req,res) {
  var user = User.build();
  user.retrieveRoutineByUserId(function (user) {
    if (user) {
      res.json({
        message : "success",
        data : user
      });
    } else {
      res.status(404).json({
        message: 'User not found',
        error: ''
      });
    }

  },function (error) {
    res.status(404).json({
      message: 'Error getting user',
      error: error
    });
  })

};

/**
 * Init a user
 * @param payload
 * @returns {{name: (*|string), lastName: ({type: string, xml: {name: string}}|spec.definitions.User.properties.lastName|{type, xml}|*|string), birthDate: (*|string), token: (*|token|number|string), username: (*|string), password: (*|string), email: (string|{type: string, xml: {name: string}}|spec.definitions.User.properties.email|{type, xml}|*|email), gender: (*|string), firstTime: (*|boolean), role_id: (*|User.role_id|{type, references}), image: (*|string), createdAt: number, modifiedAt: number}}
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
    firstTime : payload.firstTime || false,
    role_id : payload.role_id,
    image : payload.image || '',
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













