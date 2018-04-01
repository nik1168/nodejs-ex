'use strict';
var Day = require('../model/day.model').day;

/**
 * Creates a new day
 * @param req
 * @param res
 */
module.exports.create = function (req, res) {
  var day = Day.build(initDay(req.body));
  day.add(function (success) {
      var day = success.dataValues;
      res.json({
        message: 'Day created!',
        data: day
      });
    },
    function (error) {
      res.status(404).send("Error creating day");
    })
};

/**
 * Gets all days
 * @param req
 * @param res
 */
module.exports.getAll = function (req, res) {
  var day = Day.build();
  day.retrieveAll(function(days) {
    if (days) {
      res.json({
        message : "success",
        data : days
      });
    } else {
      res.status(404).send("No days were found");
    }
  }, function(error) {
    console.log("error Days");
    console.log(error);
    res.status(404).send("Error getting days");
  });
};

/**
 * Updates a day based on an ID
 * @param req
 * @param res
 */
module.exports.update = function (req,res) {
  var day = Day.build();
  updateDay(day,req.body);
  day.updateById(req.params.day_id, function(success) {
    console.log(success);
    var day = success.dataValues;
    if (success) {
      res.json({
        message: 'Day updated!',
        data : day
      });
    } else {
      res.status(404).send("Day not found");
    }
  }, function(error) {
    res.status(404).send("Error updating day");
  });
};

/**
 * Gets a single day
 * @param req
 * @param res
 */
module.exports.getById = function (req,res) {
  var day = Day.build();
  day.retrieveById(req.params.day_id, function(day) {
    if (day) {
      res.json({
        message : "success",
        data : day
      });
    } else {
      res.status(404).send("Day not found");
    }
  }, function(error) {
    res.status(404).send("Error getting day");
  });
};

/**
 * Delete a day by id
 * @param req
 * @param res
 */
module.exports.delete = function (req,res) {
  var day = Day.build();
  day.removeById(req.params.day_id, function(day) {
    if (day) {
      res.json({
        message: 'Day removed!'
      });
    } else {
      res.status(404).send("Day not found");
    }
  }, function(error) {
    res.status(404).send("Error removing day");
  });
};


/**
 * Init a day
 * @param payload
 * @returns {{name: string}}
 */
function initDay(payload) {

  return {
    name: payload.name || '',
    createdAt : Date.now(),
    modifiedAt : Date.now()
  }
}

/**
 * Updates properties of current day based on payload (not a pure function);
 * @param day
 * @param payload
 */
function updateDay(day, payload){
  day.name = payload.name;
  day.createdAt = payload.createAt;
  day.modifiedAt = Date.now();
}












