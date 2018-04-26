'use strict';
var os = require('../controller/os.controller');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definitions:
 *   OS:
 *     properties:
 *       name:
 *         type: string
 */

/**
 * @swagger
 * /os:
 *   get:
 *     tags:
 *       - OS
 *     description: Returns all os
 *     produces:
 *       - application/json
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: An array of os
 *         schema:
 *           $ref: '#/definitions/OS'
 */
router.get('/',os.getAll);


/**
 * @swagger
 * /os:
 *   post:
 *     tags:
 *       - OS
 *     description: Creates a new OS
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: os
 *         description: OS object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/OS'
 *     security:
 *        - api_key: []
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/',os.create);

/**
 * @swagger
 * /os/{os_id}:
 *   get:
 *     tags:
 *       - OS
 *     description: Gets a os by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: os_id
 *         description: OS's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: OS found
 */
router.get('/:os_id',os.getById);


/**
 * @swagger
 * /os/{os_id}:
 *   put:
 *     tags:
 *       - OS
 *     description: Updates a single OS
 *     produces: application/json
 *     parameters:
 *       - name: os_id
 *         description: os's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *       - name: os
 *         in: body
 *         required: true
 *         description: Fields for the OS resource
 *         schema:
 *           $ref: '#/definitions/OS'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/:os_id',os.update);

/**
 * @swagger
 * /os/{os_id}:
 *   delete:
 *     tags:
 *       - OS
 *     description: Deletes a single os
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: os_id
 *         description: Os's id
 *         in: path
 *         required: true
 *         type: integer
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/:os_id',os.delete);

module.exports = router;

