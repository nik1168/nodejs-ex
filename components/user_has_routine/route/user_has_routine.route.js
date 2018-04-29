'use strict';
var userHasRoutine = require('../controller/user_has_routine.controller');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definitions:
 *   UserHasRoutine:
 *     properties:
 *       user_id:
 *         type: integer
 *       routine_id:
 *         type: integer
 *       active:
 *         type: boolean
 *       startDate:
 *         type: date
 *       endDate:
 *         type: date
 */


/**
 * @swagger
 * /userHasRoutine:
 *   get:
 *     tags:
 *       - UserHasRoutine
 *     description: Returns all routines by users
 *     produces:
 *       - application/json
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: An array of routines by users
 *         schema:
 *           $ref: '#/definitions/userHasRoutine'
 */
router.get('/',userHasRoutine.getAll);


/**
 * @swagger
 * /userHasRoutine:
 *   post:
 *     tags:
 *       - UserHasRoutine
 *     description: Adds a new routine to user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userHasRoutine
 *         description: userHasRoutine object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/UserHasRoutine'
 *     security:
 *        - api_key: []
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/',userHasRoutine.create);

/**
 * @swagger
 * /userHasRoutine/{user_has_routine_id}:
 *   get:
 *     tags:
 *       - UserHasRoutine
 *     description: Gets a userHasRoutine by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user_has_routine_id
 *         description: UserHasRoutine's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: UserHasRoutine found
 */
router.get('/:user_has_routine_id',userHasRoutine.getById);


/**
 * @swagger
 * /userHasRoutine/user/{user_id}:
 *   get:
 *     tags:
 *       - UserHasRoutine
 *     description: Gets all routines by user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user_id
 *         description: User's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Routines found
 */
router.get('/:user_id',userHasRoutine.retrieveRoutinesByUserId);

/**
 * @swagger
 * /userHasRoutine/routine/{routine_id}:
 *   get:
 *     tags:
 *       - UserHasRoutine
 *     description: Gets all users by routine
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
 *         description: Users found
 */
router.get('/routine/:routine_id',userHasRoutine.retrieveUsersByRoutine);


/**
 * @swagger
 * /userHasRoutine/{user_has_routine_id}:
 *   put:
 *     tags:
 *       - UserHasRoutine
 *     description: Updates a single userHasRoutine
 *     produces: application/json
 *     parameters:
 *       - name: user_has_routine_id
 *         description: UserHasRoutine's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *       - name: userHasRoutine
 *         in: body
 *         required: true
 *         description: Fields for the userHasRoutine resource
 *         schema:
 *           $ref: '#/definitions/UserHasRoutine'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/:user_has_routine_id',userHasRoutine.update);


/**
 * @swagger
 * /userHasRoutine/{user_id}/{routine_id}:
 *   delete:
 *     tags:
 *       - UserHasRoutine
 *     description: Deletes a single UserHasRoutine
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user_id
 *         description: User's id
 *         in: path
 *         required: true
 *         type: integer
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
router.delete('/:user_id/:routine_id',userHasRoutine.delete);

module.exports = router;

