'use strict';
var Os = require('../model/os.model').os;

/**
 * Creates a new os
 * @param req
 * @param res
 */
module.exports.create = function (req, res) {
  var os = Os.build(initOs(req.body));
  os.add(function (success) {
      var os = success.dataValues;
      res.json({
        message: 'Os created!',
        data: os
      });
    },
    function (error) {
      res.status(404).send("Error creating os");
    })
};

/**
 * Gets all oss
 * @param req
 * @param res
 */
module.exports.getAll = function (req, res) {
  var os = Os.build();
  os.retrieveAll(function(oss) {
    if (oss) {
      res.json({
        message : "success",
        data : oss
      });
    } else {
      res.status(404).send("No oss were found");
    }
  }, function(error) {
    console.log("error Os");
    console.log(error);
    res.status(404).send("Error getting os");
  });
};

/**
 * Updates a os based on an ID
 * @param req
 * @param res
 */
module.exports.update = function (req,res) {
  var os = Os.build();
  updateOs(os,req.body);
  os.updateById(req.params.os_id, function(success) {
    console.log(success);
    var os = success.dataValues;
    if (success) {
      res.json({
        message: 'Os updated!',
        data : os
      });
    } else {
      res.status(404).send("Os not found");
    }
  }, function(error) {
    res.status(404).send("Error updating os");
  });
};

/**
 * Gets a single os
 * @param req
 * @param res
 */
module.exports.getById = function (req,res) {
  var os = Os.build();
  os.retrieveById(req.params.os_id, function(os) {
    if (os) {
      res.json({
        message : "success",
        data : os
      });
    } else {
      res.status(404).send("Os not found");
    }
  }, function(error) {
    res.status(404).send("Error getting os");
  });
};

/**
 * Delete a os by id
 * @param req
 * @param res
 */
module.exports.delete = function (req,res) {
  var os = Os.build();
  os.removeById(req.params.os_id, function(os) {
    if (os) {
      res.json({
        message: 'Os removed!'
      });
    } else {
      res.status(404).send("Os not found");
    }
  }, function(error) {
    res.status(404).send("Error removing os");
  });
};


/**
 * Init a os
 * @param payload
 * @returns {{name: string}}
 */
function initOs(payload) {

  return {
    name: payload.name || '',
    createdAt : Date.now(),
    modifiedAt : Date.now()
  }
}

/**
 * Updates properties of current os based on payload (not a pure function);
 * @param os
 * @param payload
 */
function updateOs(os, payload){
  os.name = payload.name;
  os.createdAt = payload.createAt;
  os.modifiedAt = Date.now();
}












