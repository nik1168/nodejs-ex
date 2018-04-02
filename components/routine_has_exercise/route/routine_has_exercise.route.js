'use strict';
var routineHasExercise = require('../controller/routine_has_exercise.controller');
var express = require('express');
var router = express.Router();

router.get('/',routineHasExercise.getAll);
router.post('/',routineHasExercise.create);
router.get('/:routine_has_exercise_id',routineHasExercise.getById);
router.put('/:routine_has_exercise_id',routineHasExercise.update);
router.delete('/:routine_id/:exercise_id/:day_id',routineHasExercise.delete);

module.exports = router;

