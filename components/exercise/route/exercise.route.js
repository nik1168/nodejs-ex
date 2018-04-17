'use strict';
var exercise = require('../controller/exercise.controller');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definitions:
 *   Exercise:
 *     properties:
 *       name:
 *         type: string
 */

/**
 * @swagger
 * /exercise:
 *   get:
 *     tags:
 *       - Exercise
 *     description: Returns all exercises
 *     produces:
 *       - application/json
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: An array of exercises
 *         schema:
 *           $ref: '#/definitions/Exercise'
 */
router.get('/',exercise.getAll);


/**
 * @swagger
 * /exercise:
 *   post:
 *     tags:
 *       - Exercise
 *     description: Creates a new Exercise
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: exercise
 *         description: Exercise object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Exercise'
 *     security:
 *        - api_key: []
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/',exercise.create);


/**
 * @swagger
 * /exercise/{exercise_id}:
 *   get:
 *     tags:
 *       - Exercise
 *     description: Gets a exercise by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: exercise_id
 *         description: Exercise's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Exercise found
 */
router.get('/:exercise_id',exercise.getById);


/**
 * @swagger
 * /exercise/{exercise_id}:
 *   put:
 *     tags:
 *       - Exercise
 *     description: Updates a single exercise
 *     produces: application/json
 *     parameters:
 *       - name: exercise_id
 *         description: Exercise's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *       - name: exercise
 *         in: body
 *         required: true
 *         description: Fields for the Exercise resource
 *         schema:
 *           $ref: '#/definitions/Exercise'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/:exercise_id',exercise.update);


/**
 * @swagger
 * /exercise/{exercise_id}:
 *   delete:
 *     tags:
 *       - Exercise
 *     description: Deletes a single day
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: exercise_id
 *         description: Exercise's id
 *         in: path
 *         required: true
 *         type: integer
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/:exercise_id',exercise.delete);

module.exports = router;

