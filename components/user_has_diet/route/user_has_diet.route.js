'use strict';
var userHasDiet = require('../controller/user_has_diet.controller');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definitions:
 *   UserHasDiet:
 *     properties:
 *       user_id:
 *         type: integer
 *       diet_id:
 *         type: integer
 *       active:
 *         type: boolean
 *       startDate:
 *         type: date
 *       endDate:
 *         type: date
 */


/**
 * @swagger
 * /userHasDiet:
 *   get:
 *     tags:
 *       - UserHasDiet
 *     description: Returns all diets by users
 *     produces:
 *       - application/json
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: An array of diets by users
 *         schema:
 *           $ref: '#/definitions/UserHasDiet'
 */
router.get('/',userHasDiet.getAll);


/**
 * @swagger
 * /userHasDiet:
 *   post:
 *     tags:
 *       - UserHasDiet
 *     description: Adds a new diet to user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userHasDiet
 *         description: userHasDiet object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/UserHasDiet'
 *     security:
 *        - api_key: []
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/',userHasDiet.create);


/**
 * @swagger
 * /userHasDiet/{user_has_diet_id}:
 *   get:
 *     tags:
 *       - UserHasDiet
 *     description: Gets a userHasDiet by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user_has_diet_id
 *         description: UserHasDiet's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: UserHasDiet found
 */
router.get('/:user_has_diet_id',userHasDiet.getById);


/**
 * @swagger
 * /userHasDiet/diets/{user_id}:
 *   get:
 *     tags:
 *       - UserHasDiet
 *     description: Gets all diets by user
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
 *         description: Diets found
 */
router.get('diets/:user_id',userHasDiet.retrieveDietsByUserId);


/**
 * @swagger
 * /userHasDiet/users/{diet_id}:
 *   get:
 *     tags:
 *       - UserHasRoutine
 *     description: Gets all users by diet
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
 *         description: Users found
 */
router.get('users/:diet_id',userHasDiet.retrieveUsersByDiet);


/**
 * @swagger
 * /userHasDiet/{user_has_diet_id}:
 *   put:
 *     tags:
 *       - UserHasDiet
 *     description: Updates a single UserHasDiet
 *     produces: application/json
 *     parameters:
 *       - name: user_has_diet_id
 *         description: UserHasDiet's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *       - name: userHasDiet
 *         in: body
 *         required: true
 *         description: Fields for the userHasDiet resource
 *         schema:
 *           $ref: '#/definitions/UserHasDiet'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/:user_has_diet_id',userHasDiet.update);


/**
 * @swagger
 * /userHasDiet/{user_id}/{diet_id}:
 *   delete:
 *     tags:
 *       - UserHasDiet
 *     description: Deletes a single UserHasDiet
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user_id
 *         description: User's id
 *         in: path
 *         required: true
 *         type: integer
 *       - name: diet_id
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
router.delete('/:user_id/:diet_id',userHasDiet.delete);

module.exports = router;

