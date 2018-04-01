'use strict';
var UserHasRoutine = require('../model/userHasRoutine.model').userHasRoutine;

/**
 * Associates a routine to a user
 * @param req
 * @param res
 */
module.exports.create = function (req, res) {
  var userHasRoutine = UserHasRoutine.build(initUserHasRoutine(req.body));
  userHasRoutine.add(function (success) {
      var userHasRoutine = success.dataValues;
      res.json({
        message: 'UserHasRoutine created!',
        data: userHasRoutine
      });
    },
    function (error) {
      res.status(404).send("Error creating userHasRoutine");
    })
};

/**
 * Gets all the routines for all users
 * @param req
 * @param res
 */
module.exports.getAll = function (req, res) {
  var userHasRoutine = UserHasRoutine.build();
  userHasRoutine.retrieveAll(function(userHasRoutines) {
    if (userHasRoutines) {
      res.json({
        message : "success",
        data : userHasRoutines
      });
    } else {
      res.status(404).send("No routines were found for any users");
    }
  }, function(error) {
    res.status(404).send("Error getting all routines for all users");
  });
};

/**
 * Updates a routine for a user based on an ID
 * @param req
 * @param res
 */
module.exports.update = function (req,res) {
  var userHasRoutine = UserHasRoutine.build();
  updateUserHasRoutine(userHasRoutine,req.body);
  userHasRoutine.updateById(req.params.user_has_routine_id, function(success) {
    console.log(success);
    var userHasRoutine = success.dataValues;
    if (success) {
      res.json({
        message: 'UserHasRoutine updated!',
        data : userHasRoutine
      });
    } else {
      res.status(404).send("UserHasRoutine not found");
    }
  }, function(error) {
    res.status(404).send("Error updating userHasRoutine");
  });
};

/**
 * Gets a single routine for a user based on id
 * @param req
 * @param res
 */
module.exports.getById = function (req,res) {
  var userHasRoutine = UserHasRoutine.build();
  userHasRoutine.retrieveById(req.params.user_has_routine_id, function(userHasRoutine) {
    if (userHasRoutine) {
      res.json({
        message : "success",
        data : userHasRoutine
      });
    } else {
      res.status(404).send("UserHasRoutine not found");
    }
  }, function(error) {
    res.status(404).send("Error getting userHasRoutine");
  });
};

/**
 * Delete a a routine for a user by id
 * @param req
 * @param res
 */
module.exports.delete = function (req,res) {
  var userHasRoutine = UserHasRoutine.build();
  userHasRoutine.removeById(req.params.user_id,req.params.routine_id, function(userHasRoutine) {
    if (userHasRoutine) {
      res.json({
        message: 'UserHasRoutine removed!'
      });
    } else {
      res.status(404).send("UserHasRoutine not found");
    }
  }, function(error) {
    res.status(404).send("Error removing userHasRoutine");
  });
};


/**
 * Init user has routine
 * @param payload
 * @returns {{user_id: *|string|UserHasRoutine.user_id|{type, references}|Device.user_id, routine_id: *|RoutineHasExercise.routine_id|{type, references}|UserHasRoutine.routine_id, active: *|boolean|Event|ServiceWorker|active|number, startDate: *, endDate: *}}
 */
function initUserHasRoutine(payload) {

  return {
    user_id: payload.user_id,
    routine_id : payload.routine_id,
    active : payload.active,
    startDate : payload.startDate,
    endDate : payload.endDate
  }
}

/**
 * Updates properties of current userHasRoutine based on payload (not a pure function);
 * @param userHasRoutine
 * @param payload
 */
function updateUserHasRoutine(userHasRoutine, payload){
  userHasRoutine.user_id = payload.user_id;
  userHasRoutine.routine_id = payload.routine_id;
  userHasRoutine.active = payload.active;
  userHasRoutine.startDate = payload.startDate;
  userHasRoutine.endDate = payload.endDate;
}












