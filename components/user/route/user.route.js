'use strict';
var user = require('../controller/user.controller');
var express = require('express');
var router = express.Router();
router.get('/',user.getAll);
router.get('/retrieveTest',user.retrieveTest);
router.post('/',user.create);
router.post('/username',user.getUserByUsername);
router.post('/usernameAndPassword',user.getUserByUsernameAndPassword);
router.get('/:user_id',user.getById);
router.get('/token/:token',user.getByToken);
router.put('/:user_id',user.update);
router.delete('/:user_id',user.delete);
module.exports = router;