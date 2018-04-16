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

/**
 * @swagger
 * /day:
 *   post:
 *     tags:
 *       - Day
 *     description: Creates a new Day
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: day
 *         description: Day object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Day'
 *     security:
 *        - api_key: []
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/',day.create);

/**
 * @swagger
 * /day/{day_id}:
 *   get:
 *     tags:
 *       - Day
 *     description: Gets a day by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: day_id
 *         description: Day's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Day found
 */
router.get('/:day_id',day.getById);

/**
 * @swagger
 * /day/{category_id}:
 *   put:
 *     tags:
 *       - Day
 *     description: Updates a single category
 *     produces: application/json
 *     parameters:
 *       - name: day_id
 *         description: Day's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *       - name: day
 *         in: body
 *         required: true
 *         description: Fields for the Day resource
 *         schema:
 *           $ref: '#/definitions/Day'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/:day_id',day.update);

/**
 * @swagger
 * /day/{day_id}:
 *   delete:
 *     tags:
 *       - Days
 *     description: Deletes a single day
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Day's id
 *         in: path
 *         required: true
 *         type: integer
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/:day_id',day.delete);

module.exports = router;

