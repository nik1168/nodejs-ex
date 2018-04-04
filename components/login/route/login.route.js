/**
 * Created by NiklausGeisser on 12/18/16.
 */
'use strict';
var login = require('../controller/login.controller');
var express = require('express');
var router = express.Router();
router.post('/',login.authenticate);
//router.use(login.middleware);
module.exports = router;
