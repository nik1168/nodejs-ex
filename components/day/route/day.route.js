'use strict';
var day = require('../controller/day.controller');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definitions:
 *   Day:
 *     properties:
 *       name:
 *         type: string
 */

/**
 * @swagger
 * /day:
 *   get:
 *     tags:
 *       - Day
 *     description: Returns all days
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of days
 *         schema:
 *           $ref: '#/definitions/Day'
 */
router.get('/',day.getAll);
router.post('/',day.create);
router.get('/:day_id',day.getById);
router.put('/:day_id',day.update);
router.delete('/:day_id',day.delete);

module.exports = router;

