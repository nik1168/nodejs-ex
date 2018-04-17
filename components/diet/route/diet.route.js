'use strict';
var diet = require('../controller/diet.controller');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definitions:
 *   Diet:
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
 * /diet:
 *   get:
 *     tags:
 *       - Diets
 *     description: Returns all diets
 *     produces:
 *       - application/json
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: An array of diets
 *         schema:
 *           $ref: '#/definitions/Diet'
 */
router.get('/',diet.getAll);


/**
 * @swagger
 * /diet:
 *   post:
 *     tags:
 *       - Diets
 *     description: Creates a new Diet
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: diet
 *         description: Diet object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Diet'
 *     security:
 *        - api_key: []
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/',diet.create);


/**
 * @swagger
 * /diet/{diet_id}:
 *   get:
 *     tags:
 *       - Diets
 *     description: Gets a diet by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: diet_id
 *         description: Diet's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Diet found
 */
router.get('/:diet_id',diet.getById);


/**
 * @swagger
 * /diet/{diet_id}:
 *   put:
 *     tags:
 *       - Diets
 *     description: Updates a single diet
 *     produces: application/json
 *     parameters:
 *       - name: diet_id
 *         description: Diet's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *       - name: diet
 *         in: body
 *         required: true
 *         description: Fields for the Diet resource
 *         schema:
 *           $ref: '#/definitions/Diet'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/:diet_id',diet.update);


/**
 * @swagger
 * /diet/{diet_id}:
 *   delete:
 *     tags:
 *       - Diets
 *     description: Deletes a single diet
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Diet's id
 *         in: path
 *         required: true
 *         type: integer
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/:diet_id',diet.delete);

module.exports = router;

