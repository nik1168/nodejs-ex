/**
 * Created by NiklausGeisser on 12/7/16.
 */
'use strict';
var user = require('../controller/user.controller');
var express = require('express');
var router = express.Router();
router.post('/',user.create);
router.get('/',user.getAll);
module.exports = router;