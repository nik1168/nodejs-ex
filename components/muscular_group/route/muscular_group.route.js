'use strict';
var muscularGroup = require('../controller/muscular_group.controller');
var express = require('express');
var router = express.Router();

router.get('/',muscularGroup.getAll);
router.post('/',muscularGroup.create);
router.get('/:muscularGroup_id',muscularGroup.getById);
router.put('/:muscularGroup_id',muscularGroup.update);
router.delete('/:muscularGroup_id',muscularGroup.delete);

module.exports = router;

