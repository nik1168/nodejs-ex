'use strict';
var device = require('../controller/device.controller');
var express = require('express');
var router = express.Router();

router.get('/',device.getAll);
router.post('/',device.create);
router.get('/:device_id',device.getById);
router.put('/:device_id',device.update);
router.delete('/:device_id',device.delete);

module.exports = router;

