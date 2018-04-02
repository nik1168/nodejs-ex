'use strict';
var Routine = require('../model/routine.model').routine;

/**
 * Creates a new routine
 * @param req
 * @param res
 */
module.exports.create = function (req, res) {
  var routine = Routine.build(initRoutine(req.body));
  routine.add(function (success) {
      var routine = success.dataValues;
      res.json({
        message: 'Routine created!',
        data: routine
      });
    },
    function (error) {
      res.status(404).send("Error creating routine");
    })
};

/**
 * Gets all routines
 * @param req
 * @param res
 */
module.exports.getAll = function (req, res) {
  var routine = Routine.build();
  routine.retrieveAll(function (routines) {
    if (routines) {
      res.json({
        message: "success",
        data: routines
      });
    } else {
      res.status(404).send("No routines were found");
    }
  }, function (error) {
    console.log("error Routines");
    console.log(error);
    res.status(404).send("Error getting routines");
  });
};

/**
 * Updates a routine based on an ID
 * @param req
 * @param res
 */
module.exports.update = function (req, res) {
  var routine = Routine.build();
  updateRoutine(routine, req.body);
  routine.updateById(req.params.routine_id, function (success) {
    console.log(success);
    var routine = success.dataValues;
    if (success) {
      res.json({
        message: 'Routine updated!',
        data: routine
      });
    } else {
      res.status(404).send("Routine not found");
    }
  }, function (error) {
    res.status(404).send("Error updating routine");
  });
};

/**
 * Gets a single routine
 * @param req
 * @param res
 */
module.exports.getById = function (req, res) {
  var routine = Routine.build();
  routine.retrieveById(req.params.routine_id, function (routine) {
    if (routine) {
      res.json({
        message: "success",
        data: routine
      });
    } else {
      res.status(404).send("Routine not found");
    }
  }, function (error) {
    res.status(404).send("Error getting routine");
  });
};

/**
 * Delete a routine by id
 * @param req
 * @param res
 */
module.exports.delete = function (req, res) {
  var routine = Routine.build();
  routine.removeById(req.params.routine_id, function (routine) {
    if (routine) {
      res.json({
        message: 'Routine removed!'
      });
    } else {
      res.status(404).send("Routine not found");
    }
  }, function (error) {
    res.status(404).send("Error removing routine");
  });
};


/**
 * Init a routine
 * @param payload
 * @returns {{name: string}}
 */
function initRoutine(payload) {

  return {
    name: payload.name || '',
    createdAt: Date.now(),
    modifiedAt: Date.now(),
    image: payload.image || '',
    description: payload.description || ''
  }
}

/**
 * Updates properties of current routine based on payload (not a pure function);
 * @param routine
 * @param payload
 */
function updateRoutine(routine, payload) {
  routine.name = payload.name;
  routine.createdAt = payload.createdAt;
  routine.modifiedAt = Date.now();
  routine.image = payload.image;
  routine.description = payload.description;
}












