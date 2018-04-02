'use strict';
var UserHasDiet = require('../model/user_has_diet.model').userHasDiet;

/**
 * Associates a diet to a user
 * @param req
 * @param res
 */
module.exports.create = function (req, res) {
  var userHasDiet = UserHasDiet.build(initUserHasDiet(req.body));
  userHasDiet.add(function (success) {
      var userHasDiet = success.dataValues;
      res.json({
        message: 'UserHasDiet created!',
        data: userHasDiet
      });
    },
    function (error) {
      res.status(404).send("Error creating userHasDiet");
    })
};

/**
 * Gets all the diets for all users
 * @param req
 * @param res
 */
module.exports.getAll = function (req, res) {
  var userHasDiet = UserHasDiet.build();
  userHasDiet.retrieveAll(function(userHasDiets) {
    if (userHasDiets) {
      res.json({
        message : "success",
        data : userHasDiets
      });
    } else {
      res.status(404).send("No diets were found for any users");
    }
  }, function(error) {
    res.status(404).send("Error getting all diets for all users");
  });
};

/**
 * Updates a diet for a user based on an ID
 * @param req
 * @param res
 */
module.exports.update = function (req,res) {
  var userHasDiet = UserHasDiet.build();
  updateUserHasDiet(userHasDiet,req.body);
  userHasDiet.updateById(req.params.user_has_diet_id, function(success) {
    console.log(success);
    var userHasDiet = success.dataValues;
    if (success) {
      res.json({
        message: 'UserHasDiet updated!',
        data : userHasDiet
      });
    } else {
      res.status(404).send("UserHasDiet not found");
    }
  }, function(error) {
    res.status(404).send("Error updating userHasDiet");
  });
};

/**
 * Gets a single diet for a user based on id
 * @param req
 * @param res
 */
module.exports.getById = function (req,res) {
  var userHasDiet = UserHasDiet.build();
  userHasDiet.retrieveById(req.params.user_has_diet_id, function(userHasDiet) {
    if (userHasDiet) {
      res.json({
        message : "success",
        data : userHasDiet
      });
    } else {
      res.status(404).send("UserHasDiet not found");
    }
  }, function(error) {
    res.status(404).send("Error getting userHasDiet");
  });
};

/**
 * Delete a a diet for a user by id
 * @param req
 * @param res
 */
module.exports.delete = function (req,res) {
  var userHasDiet = UserHasDiet.build();
  userHasDiet.removeById(req.params.user_id,req.params.diet_id, function(userHasDiet) {
    if (userHasDiet) {
      res.json({
        message: 'UserHasDiet removed!'
      });
    } else {
      res.status(404).send("UserHasDiet not found");
    }
  }, function(error) {
    res.status(404).send("Error removing userHasDiet");
  });
};


/**
 * Init user has diet
 * @param payload
 * @returns {{user_id: *|string|UserHasDiet.user_id|{type, references}|Device.user_id, diet_id: *|RoutineHasExercise.diet_id|{type, references}|UserHasDiet.diet_id, active: *|boolean|Event|ServiceWorker|active|number, startDate: *, endDate: *}}
 */
function initUserHasDiet(payload) {

  return {
    user_id: payload.user_id,
    diet_id : payload.diet_id,
    active : payload.active,
    startDate : payload.startDate,
    endDate : payload.endDate
  }
}

/**
 * Updates properties of current userHasDiet based on payload (not a pure function);
 * @param userHasDiet
 * @param payload
 */
function updateUserHasDiet(userHasDiet, payload){
  userHasDiet.user_id = payload.user_id;
  userHasDiet.diet_id = payload.diet_id;
  userHasDiet.active = payload.active;
  userHasDiet.startDate = payload.startDate;
  userHasDiet.endDate = payload.endDate;
}












