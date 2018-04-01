'use strict';
var DataTypes = require("sequelize");
var sequelize = require('../../../config/sequelize').db;
var Os = sequelize.define('os', {
  id : {
    type:DataTypes.INTEGER,
    primaryKey: true
  },
  name : {
    type : DataTypes.STRING,
    get      : function()  {
      return this.getDataValue('name');
    },
    set      : function(val) {
      this.setDataValue('name', val);
    }
  }
},{
  freezeTableName: true,
  tableName: 'os',
  timestamps: false,
  instanceMethods: {
    retrieveAll: function(onSuccess, onError) {
      Os.findAll({raw: true})
        .then(onSuccess).catch(onError);
    },
    retrieveById: function(os_id, onSuccess, onError) {
      Os.find({where: {id: os_id}}, {raw: true})
        .then(onSuccess).catch(onError);
    },
    add: function(onSuccess, onError) {
      Os.build(buildOs(this))
        .save().then(onSuccess).catch(onError);
    },
    updateById: function(os_id, onSuccess, onError) {
      Os.update({},{where: {id: os_id} })
        .then(onSuccess).catch(onError);
    },
    removeById: function(os_id, onSuccess, onError) {
      Os.destroy({where: {id: os_id}}).then(onSuccess).catch(onError);
    }
  }
});

/**
 * Build a os
 * @param self
 * @returns {{name, createdAt: *|String|Boolean, modifiedAt: *}}
 */
function buildOs(self) {
  return {
    name : self.name
  }
}

module.exports.os = Os;