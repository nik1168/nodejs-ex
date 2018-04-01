'use strict';
var DataTypes = require("sequelize");
var sequelize = require('../../../config/sequelize').db;
var User = require('../../user/model/user.model').user;
var Os = require('../../os/model/os.model').os;
var Device = sequelize.define('device', {
  id : {
    type:DataTypes.INTEGER,
    primaryKey: true
  },
  user_id : {
    type : DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  uuid : {
    type : DataTypes.STRING,
    get      : function()  {
      return this.getDataValue('uuid');
    },
    set      : function(val) {
      this.setDataValue('uuid', val);
    }
  },
  os_id : {
    type : DataTypes.INTEGER,
    references: {
      model: Os,
      key: 'id'
    }
  },
  createdAt: DataTypes.DATE,
  modifiedAt : DataTypes.DATE,
  model : {
    type : DataTypes.STRING,
    get      : function()  {
      return this.getDataValue('model');
    },
    set      : function(val) {
      this.setDataValue('model', val);
    }
  }
},{
  freezeTableName: true,
  tableName: 'device',
  timestamps: false,
  instanceMethods: {
    retrieveAll: function(onSuccess, onError) {
      Device.findAll({raw: true})
        .then(onSuccess).catch(onError);
    },
    retrieveById: function(device_id, onSuccess, onError) {
      Device.find({where: {id: device_id}}, {raw: true})
        .then(onSuccess).catch(onError);
    },
    add: function(onSuccess, onError) {
      Device.build(buildDevice(this))
        .save().then(onSuccess).catch(onError);
    },
    updateById: function(device_id, onSuccess, onError) {
      Device.update(buildDevice(this),{where: {id: device_id} })
        .then(onSuccess).catch(onError);
    },
    removeById: function(device_id, onSuccess, onError) {
      Device.destroy({where: {id: device_id}}).then(onSuccess).catch(onError);
    }
  }
});

function buildDevice(self) {
  return {
    user_id : self.user_id,
    uuid : self.uuid,
    os_id : self.os_id,
    createdAt : self.createdAt,
    modifiedAt : self.modifiedAt,
    model : self.model
  }
}
Device.belongsTo(User,{foreignKey:'user_id'});
Device.belongsTo(Os,{foreignKey:'os_id'});
module.exports.device = Device;