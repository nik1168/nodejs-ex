'use strict';
var routineHasExercise = require('../controller/routine_has_exercise.controller');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definitions:
 *   RoutineHasExercise:
 *     properties:
 *       routine_id:
 *         type: integer
 *       exercise_id:
 *         type: integer
 *       day_id:
 *         type: integer
 *       image:
 *         type: string
 *       sets:
 *         type: string
 *       reps:
 *         type: string
 */

/**
 * @swagger
 * /routineHasExercise:
 *   get:
 *     tags:
 *       - RoutineHasExercise
 *     description: Returns all exercises by routine
 *     produces:
 *       - application/json
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: An array of exercises by routines
 *         schema:
 *           $ref: '#/definitions/Day'
 */
router.get('/',routineHasExercise.getAll);


/**
 * @swagger
 * /routineHasExercise:
 *   post:
 *     tags:
 *       - RoutineHasExercise
 *     description: Creates a new RoutineHasExercise
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: day
 *         description: RoutineHasExercise object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/RoutineHasExercise'
 *     security:
 *        - api_key: []
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/',routineHasExercise.create);


/**
 * @swagger
 * /routineHasExercise/{routine_has_exercise_id}:
 *   get:
 *     tags:
 *       - RoutineHasExercise
 *     description: Gets a RoutineHasExercise by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: routine_has_exercise_id
 *         description: RoutineHasExercise's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: RoutineHasExercise found
 */
router.get('/:routine_has_exercise_id',routineHasExercise.getById);


/**
 * @swagger
 * /routineHasExercise/exercisesByRoutine/{routine_id}:
 *   get:
 *     tags:
 *       - RoutineHasExercise
 *     description: Gets a RoutineHasExercise by routin id
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
 *         description: RoutineHasExercise found
 */
router.get('/exercisesByRoutine/:routine_id',routineHasExercise.retrieveExercisesByRoutine);


/**
 * @swagger
 * /routineHasExercise/{routine_has_exercise_id}:
 *   put:
 *     tags:
 *       - RoutineHasExercise
 *     description: Updates a single day
 *     produces: application/json
 *     parameters:
 *       - name: routine_has_exercise_id
 *         description: RoutineHasExercise's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *       - name: day
 *         in: body
 *         required: true
 *         description: Fields for the RoutineHasExercise resource
 *         schema:
 *           $ref: '#/definitions/RoutineHasExercise'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/:routine_has_exercise_id',routineHasExercise.update);


/**
 * @swagger
 * /routineHasExercise/{routine_has_exercise_id}:
 *   delete:
 *     tags:
 *       - RoutineHasExercise
 *     description: Deletes a single RoutineHasExercise
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: routine_has_exercise_id
 *         description: RoutineHasExercise's id
 *         in: path
 *         required: true
 *         type: integer
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/:routine_id/:exercise_id/:day_id',routineHasExercise.delete);

module.exports = router;

