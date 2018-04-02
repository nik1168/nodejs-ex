'use strict';
var Post = require('../model/post.model').post;

/**
 * Creates a new post
 * @param req
 * @param res
 */
module.exports.create = function (req, res) {
  var post = Post.build(initPost(req.body));
  post.add(function (success) {
      var post = success.dataValues;
      res.json({
        message: 'Post created!',
        data: post
      });
    },
    function (error) {
      res.status(500).send("Error creating post");
    })
};

/**
 * Gets all roles
 * @param req
 * @param res
 */
module.exports.getAll = function (req, res) {
  var post = Post.build();
  post.retrieveAll(function(roles) {
    if (roles) {
      res.json({
        message : "success",
        data : roles
      });
    } else {
      res.status(404).send("No posts were found");
    }
  }, function(error) {
    console.log("ERROR");
    console.log(error);
    res.status(404).send("Error getting posts");
  });
};

/**
 * Updates a post based on an ID
 * @param req
 * @param res
 */
module.exports.update = function (req,res) {
  var post = Post.build();
  updatePost(post,req.body);
  post.updateById(req.params.role_id, function(success) {
    var post = success.dataValues;
    if (success) {
      res.json({
        message: 'Post updated!',
        data : post
      });
    } else {
      res.status(404).send("Post not found");
    }
  }, function(error) {
    res.status(404).send("Error updating post");
  });
};

/**
 * Gets a single post
 * @param req
 * @param res
 */
module.exports.getById = function (req,res) {
  var post = Post.build();
  post.retrieveById(req.params.role_id, function(post) {
    if (post) {
      res.json({
        message : "success",
        data : post
      });
    } else {
      res.status(404).send("Post not found");
    }
  }, function(error) {
    res.status(404).send("Error getting post");
  });
};

/**
 * Delete a post by id
 * @param req
 * @param res
 */
module.exports.delete = function (req,res) {
  var post = Post.build();
  post.removeById(req.params.role_id, function(post) {
    if (post) {
      res.json({
        message: 'Post removed!'
      });
    } else {
      res.status(404).send("Post not found");
    }
  }, function(error) {
    res.status(404).send("Error removing post");
  });
};

/**
 * Gets post by token
 * @param req
 * @param res
 */
module.exports.getByToken = function (req,res) {
  var post = Post.build();
  post.retrieveByToken(req.params.token, function(post) {
    if (post) {
      res.json({
        message : "success",
        data : post
      });
    } else {
      res.status(404).send("Post not found");
    }
  }, function(error) {
    res.status(404).send("Error getting post");
  });
};

/**
 * Gets post by postname
 * @param req
 * @param res
 */
module.exports.getPostByPostname = function (req,res) {
  var post = Post.build();
  post.retrieveByPostname(req.body.postname,function (post) {
    if (post) {
      res.json({
        message : "success",
        data : post
      });
    } else {
      res.status(404).send("Post not found");
    }

  },function (error) {
    res.status(404).send("Error getting post");
  })

};


/**
 * Init a post
 * @param payload
 * @returns {{title: string, content: string, image: string, category_id: string, createdAt: number, modifiedAt: number, video: string}}
 */
function initPost(payload) {

  return {
    title : payload.title || '',
    content : payload.content || '',
    image : payload.image || '',
    category_id : payload.category_id || '',
    createdAt : Date.now(),
    modifiedAt : Date.now(),
    video : payload.video || ''
  }
}

/**
 * Updates properties of current post based on payload (not a pure function);
 * @param post
 * @param payload
 */
function updatePost(post, payload){
  post.title = payload.title;
  post.content = payload.content;
  post.image = payload.image;
  post.category_id = payload.category_id;
  post.createdAt = payload.createdAt;
  post.modifiedAt = Date.now();
  post.video = payload.video;
}













