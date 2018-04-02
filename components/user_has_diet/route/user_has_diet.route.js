'use strict';
var userHasDiet = require('../controller/user_has_diet.controller');
var express = require('express');
var router = express.Router();

router.get('/',userHasDiet.getAll);
router.post('/',userHasDiet.create);
router.get('/:user_has_diet_id',userHasDiet.getById);
router.put('/:user_has_diet_id',userHasDiet.update);
router.delete('/:user_id/:diet_id',userHasDiet.delete);

module.exports = router;

