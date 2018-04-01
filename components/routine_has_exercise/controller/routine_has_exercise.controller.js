'use strict';
var RoutineHasExercise = require('../model/routineHasExercise.model').routineHasExercise;

/**
 * Creates a new routineHasExercise
 * @param req
 * @param res
 */
module.exports.create = function (req, res) {
  var routineHasExercise = RoutineHasExercise.build(initRoutineHasExercise(req.body));
  routineHasExercise.add(function (success) {
      var routineHasExercise = success.dataValues;
      res.json({
        message: 'RoutineHasExercise created!',
        data: routineHasExercise
      });
    },
    function (error) {
      res.status(404).send("Error creating routineHasExercise");
    })
};

/**
 * Gets all routineHasExercises
 * @param req
 * @param res
 */
module.exports.getAll = function (req, res) {
  var routineHasExercise = RoutineHasExercise.build();
  routineHasExercise.retrieveAll(function(routineHasExercises) {
    if (routineHasExercises) {
      res.json({
        message : "success",
        data : routineHasExercises
      });
    } else {
      res.status(404).send("No routineHasExercises were found");
    }
  }, function(error) {
    console.log("error RoutineHasExercises");
    console.log(error);
    res.status(404).send("Error getting routineHasExercises");
  });
};

/**
 * Updates a routineHasExercise based on an ID
 * @param req
 * @param res
 */
module.exports.update = function (req,res) {
  var routineHasExercise = RoutineHasExercise.build();
  updateRoutineHasExercise(routineHasExercise,req.body);
  routineHasExercise.updateById(req.params.routine_has_exercise_id, function(success) {
    console.log(success);
    var routineHasExercise = success.dataValues;
    if (success) {
      res.json({
        message: 'RoutineHasExercise updated!',
        data : routineHasExercise
      });
    } else {
      res.status(404).send("RoutineHasExercise not found");
    }
  }, function(error) {
    res.status(404).send("Error updating routineHasExercise");
  });
};

/**
 * Gets a single routineHasExercise
 * @param req
 * @param res
 */
module.exports.getById = function (req,res) {
  var routineHasExercise = RoutineHasExercise.build();
  routineHasExercise.retrieveById(req.params.routine_has_exercise_id, function(routineHasExercise) {
    if (routineHasExercise) {
      res.json({
        message : "success",
        data : routineHasExercise
      });
    } else {
      res.status(404).send("RoutineHasExercise not found");
    }
  }, function(error) {
    res.status(404).send("Error getting routineHasExercise");
  });
};

/**
 * Delete a routineHasExercise by id
 * @param req
 * @param res
 */
module.exports.delete = function (req,res) {
  var routineHasExercise = RoutineHasExercise.build();
  routineHasExercise.removeById(req.params.routine_id,req.params.exercise_id,req.params.day_id, function(routineHasExercise) {
    if (routineHasExercise) {
      res.json({
        message: 'RoutineHasExercise removed!'
      });
    } else {
      res.status(404).send("RoutineHasExercise not found");
    }
  }, function(error) {
    res.status(404).send("Error removing routineHasExercise");
  });
};


/**
 * Init routine has exercise
 * @param payload
 * @returns {{routine_id: *|RoutineHasExercise.routine_id|{type, references}, exercise_id: *|ExerciseHasMuscle.exercise_id|{type, references}|RoutineHasExercise.exercise_id, day_id: *|RoutineHasExercise.day_id|{type, references}}}
 */
function initRoutineHasExercise(payload) {

  return {
    routine_id: payload.routine_id,
    exercise_id : payload.exercise_id,
    day_id : payload.day_id,
    image : payload.image,
    sets : payload.sets,
    reps : payload.reps
  }
}

/**
 * Updates properties of current routineHasExercise based on payload (not a pure function);
 * @param routineHasExercise
 * @param payload
 */
function updateRoutineHasExercise(routineHasExercise, payload){
  routineHasExercise.routine_id = payload.routine_id;
  routineHasExercise.exercise_id = payload.exercise_id;
  routineHasExercise.day_id = payload.day_id;
  routineHasExercise.image = payload.image;
  routineHasExercise.sets = payload.sets;
  routineHasExercise.reps = payload.reps;
}












