'use strict';
var ExerciseHasMuscle = require('../model/exerciseHasMuscle.model').exerciseHasMuscle;

/**
 * Creates a new exerciseHasMuscle
 * @param req
 * @param res
 */
module.exports.create = function (req, res) {
  var exerciseHasMuscle = ExerciseHasMuscle.build(initExerciseHasMuscle(req.body));
  exerciseHasMuscle.add(function (success) {
      var exerciseHasMuscle = success.dataValues;
      res.json({
        message: 'ExerciseHasMuscle created!',
        data: exerciseHasMuscle
      });
    },
    function (error) {
      res.status(404).send("Error creating exerciseHasMuscle");
    })
};

/**
 * Gets all exerciseHasMuscles
 * @param req
 * @param res
 */
module.exports.getAll = function (req, res) {
  var exerciseHasMuscle = ExerciseHasMuscle.build();
  exerciseHasMuscle.retrieveAll(function(exerciseHasMuscles) {
    if (exerciseHasMuscles) {
      res.json({
        message : "success",
        data : exerciseHasMuscles
      });
    } else {
      res.status(404).send("No exerciseHasMuscles were found");
    }
  }, function(error) {
    console.log("error ExerciseHasMuscles");
    console.log(error);
    res.status(404).send("Error getting exerciseHasMuscles");
  });
};

/**
 * Updates a exerciseHasMuscle based on an ID
 * @param req
 * @param res
 */
module.exports.update = function (req,res) {
  var exerciseHasMuscle = ExerciseHasMuscle.build();
  updateExerciseHasMuscle(exerciseHasMuscle,req.body);
  exerciseHasMuscle.updateById(req.params.exercise_has_muscle_id, function(success) {
    console.log(success);
    var exerciseHasMuscle = success.dataValues;
    if (success) {
      res.json({
        message: 'ExerciseHasMuscle updated!',
        data : exerciseHasMuscle
      });
    } else {
      res.status(404).send("ExerciseHasMuscle not found");
    }
  }, function(error) {
    res.status(404).send("Error updating exerciseHasMuscle");
  });
};

/**
 * Gets a single exerciseHasMuscle
 * @param req
 * @param res
 */
module.exports.getById = function (req,res) {
  var exerciseHasMuscle = ExerciseHasMuscle.build();
  exerciseHasMuscle.retrieveById(req.params.exercise_has_muscle_id, function(exerciseHasMuscle) {
    if (exerciseHasMuscle) {
      res.json({
        message : "success",
        data : exerciseHasMuscle
      });
    } else {
      res.status(404).send("ExerciseHasMuscle not found");
    }
  }, function(error) {
    res.status(404).send("Error getting exerciseHasMuscle");
  });
};

/**
 * Delete a exerciseHasMuscle by id
 * @param req
 * @param res
 */
module.exports.delete = function (req,res) {
  var exerciseHasMuscle = ExerciseHasMuscle.build();
  exerciseHasMuscle.removeById(req.params.exercise_id,req.params.muscle_id, function(exerciseHasMuscle) {
    if (exerciseHasMuscle) {
      res.json({
        message: 'ExerciseHasMuscle removed!'
      });
    } else {
      res.status(404).send("ExerciseHasMuscle not found");
    }
  }, function(error) {
    res.status(404).send("Error removing exerciseHasMuscle");
  });
};


/**
 * Init exercise has muscle
 * @param payload
 * @returns {{exercise_id: *|ExerciseHasMuscle.exercise_id|{type, references}, muscle_id: *|ExerciseHasMuscle.muscle_id|{type, references}}}
 */
function initExerciseHasMuscle(payload) {

  return {
    exercise_id: payload.exercise_id,
    muscle_id : payload.muscle_id
  }
}

/**
 * Updates properties of current exerciseHasMuscle based on payload (not a pure function);
 * @param exerciseHasMuscle
 * @param payload
 */
function updateExerciseHasMuscle(exerciseHasMuscle, payload){
  exerciseHasMuscle.exercise_id = payload.exercise_id;
  exerciseHasMuscle.muscle_id = payload.muscle_id;
}












