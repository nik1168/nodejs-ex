'use strict';
var role = require('../controller/role.controller');
var express = require('express');
var router = express.Router();

router.get('/',role.getAll);
router.post('/',role.create);
router.get('/:role_id',role.getById);
router.put('/:role_id',role.update);
router.delete('/:role_id',role.delete);

module.exports = router;

