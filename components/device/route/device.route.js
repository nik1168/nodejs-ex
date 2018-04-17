'use strict';
var device = require('../controller/device.controller');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definitions:
 *   Device:
 *     properties:
 *       user_id:
 *         type: integer
 *       uuid:
 *         type: string
 *       os_id:
 *         type: integer
 *       model:
 *         type: string
 */

/**
 * @swagger
 * /device:
 *   get:
 *     tags:
 *       - Devices
 *     description: Returns all devices
 *     produces:
 *       - application/json
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: An array of devices
 *         schema:
 *           $ref: '#/definitions/Device'
 */
router.get('/', device.getAll);


/**
 * @swagger
 * /devices:
 *   post:
 *     tags:
 *       - Devices
 *     description: Creates a new Device
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: device
 *         description: Device object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Device'
 *     security:
 *        - api_key: []
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/', device.create);


/**
 * @swagger
 * /device/{device_id}:
 *   get:
 *     tags:
 *       - Devices
 *     description: Gets a device by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: device_id
 *         description: Device's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Device found
 */
router.get('/:device_id', device.getById);


/**
 * @swagger
 * /device/{device_id}:
 *   put:
 *     tags:
 *       - Devices
 *     description: Updates a single device
 *     produces: application/json
 *     parameters:
 *       - name: device_id
 *         description: Device's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *       - name: device
 *         in: body
 *         required: true
 *         description: Fields for the Device resource
 *         schema:
 *           $ref: '#/definitions/Device'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/:device_id', device.update);

/**
 * @swagger
 * /device/{device_id}:
 *   delete:
 *     tags:
 *       - Devices
 *     description: Deletes a single device
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: device_id
 *         description: Device's id
 *         in: path
 *         required: true
 *         type: integer
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/:device_id', device.delete);

/**
 * @swagger
 * /device/{user_id}:
 *   get:
 *     tags:
 *       - Devices
 *     description: Gets a device by user id
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
 *         description: Device found
 */
router.get('/:user_id', device.retrieveByUserId);

module.exports = router;

