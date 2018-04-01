'use strict';
var diet = require('../controller/diet.controller');
var express = require('express');
var router = express.Router();

router.get('/',diet.getAll);
router.post('/',diet.create);
router.get('/:diet_id',diet.getById);
router.put('/:diet_id',diet.update);
router.delete('/:diet_id',diet.delete);

module.exports = router;

