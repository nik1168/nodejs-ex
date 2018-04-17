'use strict';
var Device = require('../model/device.model').device;

/**
 * Creates a new device
 * @param req
 * @param res
 */
module.exports.create = function (req, res) {
  var device = Device.build(initDevice(req.body));
  device.add(function (success) {
      var device = success.dataValues;
      res.json({
        message: 'Device created!',
        data: device
      });
    },
    function (error) {
      res.status(404).send("Error creating device",error);
    })
};

/**
 * Gets all devices
 * @param req
 * @param res
 */
module.exports.getAll = function (req, res) {
  var device = Device.build();
  device.retrieveAll(function(devices) {
    if (devices) {
      res.json({
        message : "success",
        data : devices
      });
    } else {
      res.status(404).send("No devices were found");
    }
  }, function(error) {
    console.log("error Devices");
    console.log(error);
    res.status(404).send("Error getting devices");
  });
};

/**
 * Updates a device based on an ID
 * @param req
 * @param res
 */
module.exports.update = function (req,res) {
  var device = Device.build();
  updateDevice(device,req.body);
  device.updateById(req.params.device_id, function(success) {
    var device = success.dataValues;
    if (success) {
      res.json({
        message: 'Device updated!',
        data : device
      });
    } else {
      res.status(404).send("Device not found");
    }
  }, function(error) {
    res.status(404).send("Error updating device",error);
  });
};

/**
 * Gets a single device
 * @param req
 * @param res
 */
module.exports.getById = function (req,res) {
  var device = Device.build();
  device.retrieveById(req.params.device_id, function(device) {
    if (device) {
      res.json({
        message : "success",
        data : device
      });
    } else {
      res.status(404).send("Device not found");
    }
  }, function(error) {
    res.status(404).send("Error getting device");
  });
};

/**
 * Delete a device by id
 * @param req
 * @param res
 */
module.exports.delete = function (req,res) {
  var device = Device.build();
  device.removeById(req.params.device_id, function(device) {
    if (device) {
      res.json({
        message: 'Device removed!'
      });
    } else {
      res.status(404).send("Device not found");
    }
  }, function(error) {
    res.status(404).send("Error removing device");
  });
};

/**
 * Gets all devices by user id
 * @param req
 * @param res
 */
module.exports.retrieveByUserId = function (req,res) {
  var device = Device.build();
  device.retrieveByUserId(req.params.user_id, function(devices) {
    if (device) {
      res.json({
        message : "success",
        data : devices
      });
    } else {
      res.status(404).send("Device not found");
    }
  }, function(error) {
    res.status(404).send("Error getting device");
  });
};


/**
 * Init a device
 * @param payload
 * @returns {{user_id: *|string|Device.user_id|{type, references}, uuid: string, createdAt: number, modifiedAt: number, model: string}}
 */
function initDevice(payload) {
  return {
    user_id : payload.user_id,
    uuid: payload.uuid || '',
    os_id: payload.os_id || '',
    createdAt : Date.now(),
    modifiedAt : Date.now(),
    model : payload.model || ''
  }
}

/**
 * Updates properties of current device based on payload (not a pure function);
 * @param device
 * @param payload
 */
function updateDevice(device, payload){
  device.user_id = payload.user_id;
  device.uuid = payload.uuid;
  device.os_id = payload.os_id;
  device.createdAt = payload.createdAt;
  device.modifiedAt = Date.now();
  device.model = payload.model;
}












