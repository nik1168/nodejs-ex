'use strict';
var muscle = require('../controller/muscle.controller');
var express = require('express');
var router = express.Router();

router.get('/',muscle.getAll);
router.post('/',muscle.create);
router.get('/:role_id',muscle.getById);
router.put('/:role_id',muscle.update);
router.delete('/:role_id',muscle.delete);

module.exports = router;

