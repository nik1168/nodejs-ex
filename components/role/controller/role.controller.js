'use strict';
var Role = require('../model/role.model').role;

/**
 * Creates a new role
 * @param req
 * @param res
 */
module.exports.create = function (req, res) {
  var role = Role.build(initRole(req.body));
  role.add(function (success) {
      var role = success.dataValues;
      res.json({
        message: 'Role created!',
        data: role
      });
    },
    function (error) {
      res.status(404).send("Error creating role");
    })
};

/**
 * Gets all roles
 * @param req
 * @param res
 */
module.exports.getAll = function (req, res) {
  var role = Role.build();
  role.retrieveAll(function(roles) {
    if (roles) {
      res.json({
        message : "success",
        data : roles
      });
    } else {
      res.status(404).send("No roles were found");
    }
  }, function(error) {
    console.log("error Roles");
    console.log(error);
    res.status(404).send("Error getting roles");
  });
};

/**
 * Updates a role based on an ID
 * @param req
 * @param res
 */
module.exports.update = function (req,res) {
  var role = Role.build();
  updateRole(role,req.body);
  role.updateById(req.params.role_id, function(success) {
    console.log(success);
    var role = success.dataValues;
    if (success) {
      res.json({
        message: 'Role updated!',
        data : role
      });
    } else {
      res.status(404).send("Role not found");
    }
  }, function(error) {
    res.status(404).send("Error updating role");
  });
};

/**
 * Gets a single role
 * @param req
 * @param res
 */
module.exports.getById = function (req,res) {
  var role = Role.build();
  role.retrieveById(req.params.role_id, function(role) {
    if (role) {
      res.json({
        message : "success",
        data : role
      });
    } else {
      res.status(404).send("Role not found");
    }
  }, function(error) {
    res.status(404).send("Error getting role");
  });
};

/**
 * Delete a role by id
 * @param req
 * @param res
 */
module.exports.delete = function (req,res) {
  var role = Role.build();
  role.removeById(req.params.role_id, function(role) {
    if (role) {
      res.json({
        message: 'Role removed!'
      });
    } else {
      res.status(404).send("Role not found");
    }
  }, function(error) {
    res.status(404).send("Error removing role");
  });
};


/**
 * Init a role
 * @param payload
 * @returns {{name: string}}
 */
function initRole(payload) {

  return {
    name: payload.name || ''
  }
}

/**
 * Updates properties of current role based on payload (not a pure function);
 * @param role
 * @param payload
 */
function updateRole(role, payload){
  role.name = payload.name;
}












