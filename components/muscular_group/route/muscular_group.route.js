'use strict';
var muscularGroup = require('../controller/muscular_group.controller');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definitions:
 *   MuscularGroup:
 *     properties:
 *       name:
 *         type: string
 */

/**
 * @swagger
 * /muscularGroup:
 *   get:
 *     tags:
 *       - MuscularGroup
 *     description: Returns all muscular groups
 *     produces:
 *       - application/json
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: An array of muscular groups
 *         schema:
 *           $ref: '#/definitions/MuscularGroup'
 */
router.get('/',muscularGroup.getAll);

/**
 * @swagger
 * /muscularGroup:
 *   post:
 *     tags:
 *       - MuscularGroup
 *     description: Creates a new Muscular Group
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: muscularGroup
 *         description: MuscularGroup object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/MuscularGroup'
 *     security:
 *        - api_key: []
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/',muscularGroup.create);

/**
 * @swagger
 * /muscularGroup/{muscularGroup_id}:
 *   get:
 *     tags:
 *       - MuscularGroup
 *     description: Gets a Muscular Group by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: muscularGroup_id
 *         description: Muscular Group's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Muscular Group found
 */
router.get('/:muscularGroup_id',muscularGroup.getById);


/**
 * @swagger
 * /muscularGroup/{muscularGroup_id}:
 *   put:
 *     tags:
 *       - MuscularGroup
 *     description: Updates a single Muscular Group
 *     produces: application/json
 *     parameters:
 *       - name: muscularGroup_id
 *         description: Muscular Group's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *       - name: day
 *         in: body
 *         required: true
 *         description: Fields for the Muscular Group resource
 *         schema:
 *           $ref: '#/definitions/MuscularGroup'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/:muscularGroup_id',muscularGroup.update);


/**
 * @swagger
 * /muscularGroup/{muscularGroup_id}:
 *   delete:
 *     tags:
 *       - MuscularGroup
 *     description: Deletes a single Muscular Group
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: muscularGroup_id
 *         description: Muscular Group's id
 *         in: path
 *         required: true
 *         type: integer
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/:muscularGroup_id',muscularGroup.delete);

module.exports = router;

