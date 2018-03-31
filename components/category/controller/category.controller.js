'use strict';
var Category = require('../model/category.model').category;

/**
 * Creates a new category
 * @param req
 * @param res
 */
module.exports.create = function (req, res) {
  var category = Category.build(initCategory(req.body));
  category.add(function (success) {
      var category = success.dataValues;
      res.json({
        message: 'Category created!',
        data: category
      });
    },
    function (error) {
      res.status(404).send("Error creating category");
    })
};

/**
 * Gets all categorys
 * @param req
 * @param res
 */
module.exports.getAll = function (req, res) {
  var category = Category.build();
  category.retrieveAll(function(categories) {
    if (categories) {
      res.json({
        message : "success",
        data : categories
      });
    } else {
      res.status(404).send("No categories were found");
    }
  }, function(error) {
    console.log("error Roles");
    console.log(error);
    res.status(404).send("Error getting categories");
  });
};

/**
 * Updates a category based on an ID
 * @param req
 * @param res
 */
module.exports.update = function (req,res) {
  var category = Category.build();
  updateCategory(category,req.body);
  category.updateById(req.params.category_id, function(success) {
    console.log(success);
    var category = success.dataValues;
    if (success) {
      res.json({
        message: 'Category updated!',
        data : category
      });
    } else {
      res.status(404).send("Category not found");
    }
  }, function(error) {
    res.status(404).send("Error updating category");
  });
};

/**
 * Gets a single category
 * @param req
 * @param res
 */
module.exports.getById = function (req,res) {
  var category = Category.build();
  category.retrieveById(req.params.category_id, function(category) {
    if (category) {
      res.json({
        message : "success",
        data : category
      });
    } else {
      res.status(404).send("Category not found");
    }
  }, function(error) {
    res.status(404).send("Error getting category");
  });
};

/**
 * Delete a category by id
 * @param req
 * @param res
 */
module.exports.delete = function (req,res) {
  var category = Category.build();
  category.removeById(req.params.category_id, function(category) {
    if (category) {
      res.json({
        message: 'Category removed!'
      });
    } else {
      res.status(404).send("Category not found");
    }
  }, function(error) {
    res.status(404).send("Error removing category");
  });
};


/**
 * Init a category
 * @param payload
 * @returns {{name: string}}
 */
function initCategory(payload) {

  return {
    name: payload.name || '',
    createdAt : Date.now(),
    modifiedAt : Date.now()
  }
}

/**
 * Updates properties of current category based on payload (not a pure function);
 * @param category
 * @param payload
 */
function updateCategory(category, payload){
  category.name = payload.name;
  category.createdAt = payload.createdAt;
  category.modifiedAt = Date.now();
}












