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
 *       image:
 *         type: string
 *       description:
 *         type: string
 */

/**
 * @swagger
 * /routine:
 *   get:
 *     tags:
 *       - Routine
 *     description: Returns all routines
 *     produces:
 *       - application/json
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: An array of routines
 *         schema:
 *           $ref: '#/definitions/Routine'
 */
router.get('/',routine.getAll);


/**
 * @swagger
 * /routine:
 *   post:
 *     tags:
 *       - Routine
 *     description: Creates a new Routine
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: day
 *         description: Routine object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Routine'
 *     security:
 *        - api_key: []
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/',routine.create);


/**
 * @swagger
 * /routine/{routine_id}:
 *   get:
 *     tags:
 *       - Day
 *     description: Gets a routine by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: routine_id
 *         description: Routine's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Routine found
 */
router.get('/:routine_id',routine.getById);


/**
 * @swagger
 * /routine/{routine_id}:
 *   put:
 *     tags:
 *       - Routine
 *     description: Updates a single routine
 *     produces: application/json
 *     parameters:
 *       - name: routine_id
 *         description: Routine's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *       - name: day
 *         in: body
 *         required: true
 *         description: Fields for the Routine resource
 *         schema:
 *           $ref: '#/definitions/Routine'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/:routine_id',routine.update);


/**
 * @swagger
 * /routine/{routine_id}:
 *   delete:
 *     tags:
 *       - Routine
 *     description: Deletes a single routine
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: routine_id
 *         description: Routine's id
 *         in: path
 *         required: true
 *         type: integer
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/:routine_id',routine.delete);

/**
 * @swagger
 * /routine/{user_id}:
 *   get:
 *     tags:
 *       - Routine
 *     description: Returns a routine based on user id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user_id
 *         description: User's id
 *         in: path
 *         required: true
 *         type: integer
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: An array of routines based on user id
 *         schema:
 *           $ref: '#/definitions/Routine'
 */
router.get('/:user_id',routine.getByUserId);

module.exports = router;

