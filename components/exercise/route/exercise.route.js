'use strict';
var exercise = require('../controller/role.controller');
var express = require('express');
var router = express.Router();

router.get('/',exercise.getAll);
router.post('/',exercise.create);
router.get('/:exercise_id',exercise.getById);
router.put('/:exercise_id',exercise.update);
router.delete('/:exercise_id',exercise.delete);

module.exports = router;

