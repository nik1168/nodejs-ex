'use strict';
var userHasRoutine = require('../controller/user_has_routine.controller');
var express = require('express');
var router = express.Router();

router.get('/',userHasRoutine.getAll);
router.post('/',userHasRoutine.create);
router.get('/:user_has_routine_id',userHasRoutine.getById);
router.get('/:user_id',userHasRoutine.retrieveRoutinesByUserId);
router.put('/:user_has_routine_id',userHasRoutine.update);
router.delete('/:user_id/:routine_id',userHasRoutine.delete);

module.exports = router;

