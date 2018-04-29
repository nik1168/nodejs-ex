'use strict';
var muscle = require('../controller/muscle.controller');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definitions:
 *   Muscle:
 *     properties:
 *       name:
 *         type: string
 *       muscular_group_id:
 *         type: integer
 */


/**
 * @swagger
 * /muscle:
 *   get:
 *     tags:
 *       - Muscle
 *     description: Returns all muscles
 *     produces:
 *       - application/json
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: An array of muscles
 *         schema:
 *           $ref: '#/definitions/Muscle'
 */
router.get('/',muscle.getAll);


/**
 * @swagger
 * /muscle:
 *   post:
 *     tags:
 *       - Muscle
 *     description: Creates a new Muscle
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: day
 *         description: Muscle object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Muscle'
 *     security:
 *        - api_key: []
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/',muscle.create);


/**
 * @swagger
 * /muscle/{muscle_id}:
 *   get:
 *     tags:
 *       - Muscle
 *     description: Gets a muscle by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: muscle_id
 *         description: Muscle's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Muscle found
 */
router.get('/:muscle_id',muscle.getById);


/**
 * @swagger
 * /muscle/{muscle_id}:
 *   put:
 *     tags:
 *       - Muscle
 *     description: Updates a single muscle
 *     produces: application/json
 *     parameters:
 *       - name: muscle_id
 *         description: Muscle's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *       - name: muscle
 *         in: body
 *         required: true
 *         description: Fields for the Muscle resource
 *         schema:
 *           $ref: '#/definitions/Muscle'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/:muscle_id',muscle.update);

/**
 * @swagger
 * /muscle/{muscle_id}:
 *   delete:
 *     tags:
 *       - Muscle
 *     description: Deletes a single Muscle
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: muscle_id
 *         description: Muscle's id
 *         in: path
 *         required: true
 *         type: integer
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/:muscle_id',muscle.delete);

module.exports = router;

