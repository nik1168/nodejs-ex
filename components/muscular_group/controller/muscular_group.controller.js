'use strict';
var MuscularGroup = require('../model/muscular_group.model').muscularGroup;

/**
 * Creates a new muscularGroup
 * @param req
 * @param res
 */
module.exports.create = function (req, res) {
  var muscularGroup = MuscularGroup.build(initMuscularGroup(req.body));
  muscularGroup.add(function (success) {
      var muscularGroup = success.dataValues;
      res.json({
        message: 'MuscularGroup created!',
        data: muscularGroup
      });
    },
    function (error) {
      res.status(404).send("Error creating muscularGroup");
    })
};

/**
 * Gets all muscularGroups
 * @param req
 * @param res
 */
module.exports.getAll = function (req, res) {
  var muscularGroup = MuscularGroup.build();
  muscularGroup.retrieveAll(function(muscularGroups) {
    if (muscularGroups) {
      res.json({
        message : "success",
        data : muscularGroups
      });
    } else {
      res.status(404).send("No muscularGroups were found");
    }
  }, function(error) {
    console.log("error MuscularGroups");
    console.log(error);
    res.status(404).send("Error getting muscularGroups");
  });
};

/**
 * Updates a muscularGroup based on an ID
 * @param req
 * @param res
 */
module.exports.update = function (req,res) {
  var muscularGroup = MuscularGroup.build();
  updateMuscularGroup(muscularGroup,req.body);
  muscularGroup.updateById(req.params.muscular_group_id, function(success) {
    console.log(success);
    var muscularGroup = success.dataValues;
    if (success) {
      res.json({
        message: 'MuscularGroup updated!',
        data : muscularGroup
      });
    } else {
      res.status(404).send("MuscularGroup not found");
    }
  }, function(error) {
    res.status(404).send("Error updating muscularGroup");
  });
};

/**
 * Gets a single muscularGroup
 * @param req
 * @param res
 */
module.exports.getById = function (req,res) {
  var muscularGroup = MuscularGroup.build();
  muscularGroup.retrieveById(req.params.muscular_group_id, function(muscularGroup) {
    if (muscularGroup) {
      res.json({
        message : "success",
        data : muscularGroup
      });
    } else {
      res.status(404).send("MuscularGroup not found");
    }
  }, function(error) {
    res.status(404).send("Error getting muscularGroup");
  });
};

/**
 * Delete a muscularGroup by id
 * @param req
 * @param res
 */
module.exports.delete = function (req,res) {
  var muscularGroup = MuscularGroup.build();
  muscularGroup.removeById(req.params.muscular_group_id, function(muscularGroup) {
    if (muscularGroup) {
      res.json({
        message: 'MuscularGroup removed!'
      });
    } else {
      res.status(404).send("MuscularGroup not found");
    }
  }, function(error) {
    res.status(404).send("Error removing muscularGroup");
  });
};


/**
 * Init a muscularGroup
 * @param payload
 * @returns {{name: string}}
 */
function initMuscularGroup(payload) {

  return {
    name: payload.name || '',
    createdAt : Date.now(),
    modifiedAt : Date.now()
  }
}

/**
 * Updates properties of current muscularGroup based on payload (not a pure function);
 * @param muscularGroup
 * @param payload
 */
function updateMuscularGroup(muscularGroup, payload){
  muscularGroup.name = payload.name;
  muscularGroup.createdAt = payload.createAt;
  muscularGroup.modifiedAt = Date.now();
}












