'use strict';
var exerciseHasMuscle = require('../controller/exercise_has_muscle.controller');
var express = require('express');
var router = express.Router();

router.get('/',exerciseHasMuscle.getAll);
router.post('/',exerciseHasMuscle.create);
router.get('/:exercise_has_muscle_id',exerciseHasMuscle.getById);
router.put('/:exercise_has_muscle_id',exerciseHasMuscle.update);
router.delete('/:exercise_id/:muscle_id',exerciseHasMuscle.delete);

module.exports = router;

