'use strict';
var category = require('../controller/category.controller');
var express = require('express');
var router = express.Router();

router.get('/',category.getAll);
router.post('/',category.create);
router.get('/:category_id',category.getById);
router.put('/:category_id',category.update);
router.delete('/:category_id',category.delete);

module.exports = router;

