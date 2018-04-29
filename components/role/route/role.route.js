'use strict';
var role = require('../controller/role.controller');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definitions:
 *   Role:
 *     properties:
 *       name:
 *         type: string
 */


/**
 * @swagger
 * /role:
 *   get:
 *     tags:
 *       - Role
 *     description: Returns all roles
 *     produces:
 *       - application/json
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: An array of roles
 *         schema:
 *           $ref: '#/definitions/Role'
 */
router.get('/',role.getAll);


/**
 * @swagger
 * /role:
 *   post:
 *     tags:
 *       - Role
 *     description: Creates a new Role
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: day
 *         description: Role object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Role'
 *     security:
 *        - api_key: []
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/',role.create);


/**
 * @swagger
 * /role/{role_id}:
 *   get:
 *     tags:
 *       - Role
 *     description: Gets a role by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: role_id
 *         description: Role's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Role found
 */
router.get('/:role_id',role.getById);


/**
 * @swagger
 * /role/{role_id}:
 *   put:
 *     tags:
 *       - Role
 *     description: Updates a single role
 *     produces: application/json
 *     parameters:
 *       - name: role_id
 *         description: Role's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *       - name: day
 *         in: body
 *         required: true
 *         description: Fields for the Role resource
 *         schema:
 *           $ref: '#/definitions/Role'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/:role_id',role.update);


/**
 * @swagger
 * /role/{role_id}:
 *   delete:
 *     tags:
 *       - Role
 *     description: Deletes a single role
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: role_id
 *         description: Role's id
 *         in: path
 *         required: true
 *         type: integer
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/:role_id',role.delete);

module.exports = router;

