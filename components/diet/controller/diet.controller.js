'use strict';
var Diet = require('../model/diet.model').diet;

/**
 * Creates a new diet
 * @param req
 * @param res
 */
module.exports.create = function (req, res) {
  var diet = Diet.build(initDiet(req.body));
  diet.add(function (success) {
      var diet = success.dataValues;
      res.json({
        message: 'Diet created!',
        data: diet
      });
    },
    function (error) {
      res.status(404).send("Error creating diet");
    })
};

/**
 * Gets all diets
 * @param req
 * @param res
 */
module.exports.getAll = function (req, res) {
  var diet = Diet.build();
  diet.retrieveAll(function (diets) {
    if (diets) {
      res.json({
        message: "success",
        data: diets
      });
    } else {
      res.status(404).send("No diets were found");
    }
  }, function (error) {
    console.log("error Diets");
    console.log(error);
    res.status(404).send("Error getting diets");
  });
};

/**
 * Updates a diet based on an ID
 * @param req
 * @param res
 */
module.exports.update = function (req, res) {
  var diet = Diet.build();
  updateDiet(diet, req.body);
  diet.updateById(req.params.diet_id, function (success) {
    console.log(success);
    var diet = success.dataValues;
    if (success) {
      res.json({
        message: 'Diet updated!',
        data: diet
      });
    } else {
      res.status(404).send("Diet not found");
    }
  }, function (error) {
    res.status(404).send("Error updating diet");
  });
};

/**
 * Gets a single diet
 * @param req
 * @param res
 */
module.exports.getById = function (req, res) {
  var diet = Diet.build();
  diet.retrieveById(req.params.diet_id, function (diet) {
    if (diet) {
      res.json({
        message: "success",
        data: diet
      });
    } else {
      res.status(404).send("Diet not found");
    }
  }, function (error) {
    res.status(404).send("Error getting diet");
  });
};

/**
 * Delete a diet by id
 * @param req
 * @param res
 */
module.exports.delete = function (req, res) {
  var diet = Diet.build();
  diet.removeById(req.params.diet_id, function (diet) {
    if (diet) {
      res.json({
        message: 'Diet removed!'
      });
    } else {
      res.status(404).send("Diet not found");
    }
  }, function (error) {
    res.status(404).send("Error removing diet");
  });
};


/**
 * Init a diet
 * @param payload
 * @returns {{name: string}}
 */
function initDiet(payload) {

  return {
    name: payload.name || '',
    createdAt: Date.now(),
    modifiedAt: Date.now(),
    image: payload.image || '',
    description: payload.description || ''
  }
}

/**
 * Updates properties of current diet based on payload (not a pure function);
 * @param diet
 * @param payload
 */
function updateDiet(diet, payload) {
  diet.name = payload.name;
  diet.createdAt = payload.createdAt;
  diet.modifiedAt = Date.now();
  diet.image = payload.image;
  diet.description = payload.description;
}












