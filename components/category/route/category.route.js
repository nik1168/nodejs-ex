'use strict';
var category = require('../controller/category.controller');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definitions:
 *   Category:
 *     properties:
 *       name:
 *         type: string
 *         example: "Alimentación"
 */

/**
 * @swagger
 * /category:
 *   get:
 *     tags:
 *       - Categories
 *     description: Returns all categories
 *     produces:
 *       - application/json
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: An array of categories
 *         schema:
 *           $ref: '#/definitions/Category'
 */
router.get('/',category.getAll);


/**
 * @swagger
 * /category:
 *   post:
 *     tags:
 *       - Categories
 *     description: Creates a new Category
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: category
 *         description: Category object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Category'
 *     security:
 *        - api_key: []
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/',category.create);


/**
 * @swagger
 * /category/{category_id}:
 *   get:
 *     tags:
 *       - Categories
 *     description: Gets a category by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: category_id
 *         description: Category's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Category found
 */
router.get('/:category_id',category.getById);


/**
 * @swagger
 * /category/{category_id}:
 *   put:
 *     tags:
 *       - Categories
 *     description: Updates a single category
 *     produces: application/json
 *     parameters:
 *       - name: category_id
 *         description: Category's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *       - name: category
 *         in: body
 *         required: true
 *         description: Fields for the Category resource
 *         schema:
 *           $ref: '#/definitions/Category'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/:category_id',category.update);


/**
 * @swagger
 * /category/{category_id}:
 *   delete:
 *     tags:
 *       - Categories
 *     description: Deletes a single category
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Category's id
 *         in: path
 *         required: true
 *         type: integer
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/:category_id',category.delete);

module.exports = router;

