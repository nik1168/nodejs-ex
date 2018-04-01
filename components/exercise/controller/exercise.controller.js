'use strict';
var Exercise = require('../model/exercise.model').exercise;

/**
 * Creates a new exercise
 * @param req
 * @param res
 */
module.exports.create = function (req, res) {
  var exercise = Exercise.build(initExercise(req.body));
  exercise.add(function (success) {
      var exercise = success.dataValues;
      res.json({
        message: 'Exercise created!',
        data: exercise
      });
    },
    function (error) {
      res.status(404).send("Error creating exercise");
    })
};

/**
 * Gets all exercises
 * @param req
 * @param res
 */
module.exports.getAll = function (req, res) {
  var exercise = Exercise.build();
  exercise.retrieveAll(function(exercises) {
    if (exercises) {
      res.json({
        message : "success",
        data : exercises
      });
    } else {
      res.status(404).send("No exercises were found");
    }
  }, function(error) {
    console.log("error Exercises");
    console.log(error);
    res.status(404).send("Error getting exercises");
  });
};

/**
 * Updates a exercise based on an ID
 * @param req
 * @param res
 */
module.exports.update = function (req,res) {
  var exercise = Exercise.build();
  updateExercise(exercise,req.body);
  exercise.updateById(req.params.exercise_id, function(success) {
    console.log(success);
    var exercise = success.dataValues;
    if (success) {
      res.json({
        message: 'Exercise updated!',
        data : exercise
      });
    } else {
      res.status(404).send("Exercise not found");
    }
  }, function(error) {
    res.status(404).send("Error updating exercise");
  });
};

/**
 * Gets a single exercise
 * @param req
 * @param res
 */
module.exports.getById = function (req,res) {
  var exercise = Exercise.build();
  exercise.retrieveById(req.params.exercise_id, function(exercise) {
    if (exercise) {
      res.json({
        message : "success",
        data : exercise
      });
    } else {
      res.status(404).send("Exercise not found");
    }
  }, function(error) {
    res.status(404).send("Error getting exercise");
  });
};

/**
 * Delete a exercise by id
 * @param req
 * @param res
 */
module.exports.delete = function (req,res) {
  var exercise = Exercise.build();
  exercise.removeById(req.params.exercise_id, function(exercise) {
    if (exercise) {
      res.json({
        message: 'Exercise removed!'
      });
    } else {
      res.status(404).send("Exercise not found");
    }
  }, function(error) {
    res.status(404).send("Error removing exercise");
  });
};


/**
 * Init a exercise
 * @param payload
 * @returns {{name: string}}
 */
function initExercise(payload) {

  return {
    name: payload.name || '',
    createdAt : Date.now(),
    modifiedAt : Date.now()
  }
}

/**
 * Updates properties of current exercise based on payload (not a pure function);
 * @param exercise
 * @param payload
 */
function updateExercise(exercise, payload){
  exercise.name = payload.name;
  exercise.createdAt = payload.createAt;
  exercise.modifiedAt = Date.now();
}












