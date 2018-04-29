'use strict';
var routine = require('../controller/routine.controller');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definitions:
 *   Routine:
 *     properties:
 *       name:
 *         type: string
 */

router.get('/',routine.getAll);
router.post('/',routine.create);
router.get('/:routine_id',routine.getById);
router.put('/:routine_id',routine.update);
router.delete('/:routine_id',routine.delete);

module.exports = router;

