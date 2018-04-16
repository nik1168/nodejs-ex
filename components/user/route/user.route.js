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
 *         example: "Niklaus"
 *       lastName:
 *         type: string
 *         example: "Geisser"
 *       birthDate:
 *         type: date
 *         example: "1994-01-26"
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



/**
 * @swagger
 * /user/usernameAndPassword:
 *   post:
 *     tags:
 *       - Users
 *     description: Gets a user by username
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: User's username
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/UsernameAndPassword'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: User found
 */
router.post('/usernameAndPassword',user.getUserByUsernameAndPassword);



/**
 * @swagger
 * /user/{user_id}:
 *   get:
 *     tags:
 *       - Users
 *     description: Gets a user by id
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
 *         description: User found
 */
router.get('/:user_id',user.getById);



/**
 * @swagger
 * /user/token/{token}:
 *   get:
 *     tags:
 *       - Users
 *     description: Gets a user by token
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: User's token
 *         in: path
 *         required: true
 *         schema:
 *           type: 'string'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: User found
 */
router.get('/token/:token',user.getByToken);



/**
 * @swagger
 * /user/{user_id}:
 *   put:
 *     tags:
 *       - Users
 *     description: Updates a single user
 *     produces: application/json
 *     parameters:
 *       - name: user_id
 *         description: User's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *       - name: user
 *         in: body
 *         required: true
 *         description: Fields for the User resource
 *         schema:
 *           $ref: '#/definitions/User'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/:user_id',user.update);



/**
 * @swagger
 * /user/{user_id}:
 *   delete:
 *     tags:
 *       - Users
 *     description: Deletes a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: User's id
 *         in: path
 *         required: true
 *         type: integer
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/:user_id',user.delete);


module.exports = router;