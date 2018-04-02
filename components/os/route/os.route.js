'use strict';
var os = require('../controller/os.controller');
var express = require('express');
var router = express.Router();

router.get('/',os.getAll);
router.post('/',os.create);
router.get('/:os_id',os.getById);
router.put('/:os_id',os.update);
router.delete('/:os_id',os.delete);

module.exports = router;

