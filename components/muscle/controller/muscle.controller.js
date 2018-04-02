'use strict';
var Muscle = require('../model/muscle.model').muscle;

/**
 * Creates a new muscle
 * @param req
 * @param res
 */
module.exports.create = function (req, res) {
  var muscle = Muscle.build(initRole(req.body));
  muscle.add(function (success) {
      var muscle = success.dataValues;
      res.json({
        message: 'Muscle created!',
        data: muscle
      });
    },
    function (error) {
      res.status(404).send("Error creating muscle");
    })
};

/**
 * Gets all roles
 * @param req
 * @param res
 */
module.exports.getAll = function (req, res) {
  var muscle = Muscle.build();
  muscle.retrieveAll(function(roles) {
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
 * Updates a muscle based on an ID
 * @param req
 * @param res
 */
module.exports.update = function (req,res) {
  var muscle = Muscle.build();
  updateRole(muscle,req.body);
  muscle.updateById(req.params.role_id, function(success) {
    console.log(success);
    var muscle = success.dataValues;
    if (success) {
      res.json({
        message: 'Muscle updated!',
        data : muscle
      });
    } else {
      res.status(404).send("Muscle not found");
    }
  }, function(error) {
    res.status(404).send("Error updating muscle");
  });
};

/**
 * Gets a single muscle
 * @param req
 * @param res
 */
module.exports.getById = function (req,res) {
  var muscle = Muscle.build();
  muscle.retrieveById(req.params.role_id, function(muscle) {
    if (muscle) {
      res.json({
        message : "success",
        data : muscle
      });
    } else {
      res.status(404).send("Muscle not found");
    }
  }, function(error) {
    res.status(404).send("Error getting muscle");
  });
};

/**
 * Delete a muscle by id
 * @param req
 * @param res
 */
module.exports.delete = function (req,res) {
  var muscle = Muscle.build();
  muscle.removeById(req.params.role_id, function(muscle) {
    if (muscle) {
      res.json({
        message: 'Muscle removed!'
      });
    } else {
      res.status(404).send("Muscle not found");
    }
  }, function(error) {
    res.status(404).send("Error removing muscle");
  });
};


/**
 * Init a muscle
 * @param payload
 * @returns {{name: string}}
 */
function initRole(payload) {

  return {
    name: payload.name || '',
    createdAt : Date.now(),
    modifiedAt : Date.now()
  }
}

/**
 * Updates properties of current muscle based on payload (not a pure function);
 * @param muscle
 * @param payload
 */
function updateRole(muscle, payload){
  muscle.name = payload.name;
  muscle.createdAt = payload.createdAt;
  muscle.modifiedAt = Date.now();
}












