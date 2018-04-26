/**
 * Created by NiklausGeisser on 12/18/16.
 */
'use strict';
var login = require('../controller/login.controller');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definitions:
 *   UsernameAndPassword:
 *      properties:
 *        username:
 *          type: string
 *          example: "nik1168"
 *        password:
 *          type: string
 *          example: "nik1168"
 */

/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - Login
 *     description: Authenticates a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: User's username and password
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/UsernameAndPassword'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Authenticated successfully
 */
router.post('/',login.authenticate);
module.exports = router;
