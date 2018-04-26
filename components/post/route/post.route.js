'use strict';
var post = require('../controller/post.controller');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definitions:
 *   Post:
 *     properties:
 *       title:
 *         type: string
 *       content:
 *         type: string
 *       image:
 *         type: string
 *       category_id:
 *         type: integer
 *       video:
 *         type: string
 */


/**
 * @swagger
 * /post:
 *   get:
 *     tags:
 *       - Posts
 *     description: Returns all posts
 *     produces:
 *       - application/json
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: An array of posts
 *         schema:
 *           $ref: '#/definitions/Post'
 */
router.get('/',post.getAll);


/**
 * @swagger
 * /post:
 *   post:
 *     tags:
 *       - Posts
 *     description: Creates a new post
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: post
 *         description: Post object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Post'
 *     security:
 *        - api_key: []
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/',post.create);

/**
 * @swagger
 * /post/{post_id}:
 *   get:
 *     tags:
 *       - Posts
 *     description: Gets a post by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: post_id
 *         description: Post's id
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
router.get('/:post_id',post.getById);


/**
 * @swagger
 * /post/{post_id}:
 *   put:
 *     tags:
 *       - Posts
 *     description: Updates a single post
 *     produces: application/json
 *     parameters:
 *       - name: post_id
 *         description: Post's id
 *         in: path
 *         required: true
 *         schema:
 *           type: 'integer'
 *       - name: post
 *         in: body
 *         required: true
 *         description: Fields for the Post resource
 *         schema:
 *           $ref: '#/definitions/Post'
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/:post_id',post.update);


/**
 * @swagger
 * /post/{post_id}:
 *   delete:
 *     tags:
 *       - Posts
 *     description: Deletes a single post
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Post's id
 *         in: path
 *         required: true
 *         type: integer
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/:post_id',post.delete);
module.exports = router;