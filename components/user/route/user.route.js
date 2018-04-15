'use strict';
var user = require('../controller/user.controller');
var express = require('express');
var router = express.Router();
/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       name:
 *         type: string
 *         example: "Juan"
 *       lastName:
 *         type: string
 *         example: "Perez"
 *       birthDate:
 *         type: date
 *       token:
 *         type: string
 *       username:
 *         type: string
 *       password:
 *         type: string
 *       email:
 *         type: string
 *       gender:
 *         type: string
 *       role_id:
 *         type: integer
 *       image:
 *         type: string
 */

/**
 * @swagger
 * /user:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.get('/',user.getAll);
/**
 * @swagger
 * /user/retrieveTest:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns all routines by user id (test)
 *     produces:
 *       - application/json
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: An array of routines
 */
router.get('/retrieveTest',user.retrieveRoutineByUserId);
/**
 * @swagger
 * /user:
 *   post:
 *     tags:
 *       - Users
 *     description: Creates a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     security:
 *        - api_key: []
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/',user.create);
/**
 * @swagger
 * /user/username:
 *   get:
 *     tags:
 *       - Users
 *     description: Gets a user by username
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: User's username
 *         in: query
 *         required: true
 *         schema:
 *           type: 'string'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: User found
 */
router.get('/username',user.getUserByUsername);
router.post('/usernameAndPassword',user.getUserByUsernameAndPassword);
router.get('/:user_id',user.getById);
router.get('/token/:token',user.getByToken);
router.put('/:user_id',user.update);
router.delete('/:user_id',user.delete);
module.exports = router;