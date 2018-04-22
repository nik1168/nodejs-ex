'use strict';
var exerciseHasMuscle = require('../controller/exercise_has_muscle.controller');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definitions:
 *   ExerciseHasMuscle:
 *     properties:
 *       exercise_id:
 *         type: integer
 *       muscle_id:
 *         type: integer
 */

/**
 * @swagger
 * /exercise/muscles:
 *   get:
 *     tags:
 *       - Exercise
 *     description: Returns all the muscles worked in an exercise
 *     produces:
 *       - application/json
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: An array of muscles worked by exercise
 *         schema:
 *           $ref: '#/definitions/ExerciseHasMuscle'
 */
router.get('/',exerciseHasMuscle.getAll);

/**
 * @swagger
 * /exercise/muscles:
 *   post:
 *     tags:
 *       - Exercise
 *     description: Creates a new muscle worked in an exercise
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: exerciseHasMuscle
 *         description: Exercise has Muscle object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/ExerciseHasMuscle'
 *     security:
 *        - api_key: []
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/',exerciseHasMuscle.create);

/**
 * @swagger
 * /exercise/muscles/{exercise_has_muscle_id}:
 *   get:
 *     tags:
 *       - Exercise
 *     description: Gets a exercise has muscle by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: exercise_has_muscle_id
 *         description: Exercise has muscle id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Exercise has Muscle found
 */
router.get('/:exercise_has_muscle_id',exerciseHasMuscle.getById);

/**
 * @swagger
 * /exercise/muscles/{exercise_has_muscle_id}:
 *   put:
 *     tags:
 *       - Exercise
 *     description: Updates a single exercise has muscle object
 *     produces: application/json
 *     parameters:
 *       - name: exercise_has_muscle_id
 *         description: Exercise has muscle id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *       - name: exerciseHasMuscle
 *         in: body
 *         required: true
 *         description: Fields for the Exercise resource
 *         schema:
 *           $ref: '#/definitions/ExerciseHasMuscle'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/:exercise_has_muscle_id',exerciseHasMuscle.update);

/**
 * @swagger
 * /exercise/muscles/{exercise_has_muscle_id}:
 *   delete:
 *     tags:
 *       - Exercise
 *     description: Deletes a single exercise has muscle object
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: exercise_has_muscle_id
 *         description: Exercise has muscle id
 *         in: path
 *         required: true
 *         type: integer
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/:exercise_id/:muscle_id',exerciseHasMuscle.delete);

module.exports = router;

