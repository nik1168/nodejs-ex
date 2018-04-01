'use strict';
var muscle = require('../controller/muscle.controller');
var express = require('express');
var router = express.Router();

router.get('/',muscle.getAll);
router.post('/',muscle.create);
router.get('/:muscle_id',muscle.getById);
router.put('/:muscle_id',muscle.update);
router.delete('/:muscle_id',muscle.delete);

module.exports = router;

