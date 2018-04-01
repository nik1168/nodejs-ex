'use strict';
var day = require('../controller/day.controller');
var express = require('express');
var router = express.Router();

router.get('/',day.getAll);
router.post('/',day.create);
router.get('/:day_id',day.getById);
router.put('/:day_id',day.update);
router.delete('/:day_id',day.delete);

module.exports = router;

