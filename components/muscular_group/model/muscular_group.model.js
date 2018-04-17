'use strict';
var DataTypes = require("sequelize");
var sequelize = require('../../../config/sequelize').db;
var MuscularGroup = sequelize.define('MuscularGroup', {
  id : {
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name : {
    type : DataTypes.STRING,
    get      : function()  {
      return this.getDataValue('name');
    },
    set      : function(val) {
      this.setDataValue('name', val);
    }
  },
  createdAt: DataTypes.DATE,
  modifiedAt : DataTypes.DATE
},{
  freezeTableName: true,
  tableName: 'muscular_group',
  timestamps: false,
  instanceMethods: {
    retrieveAll: function(onSuccess, onError) {
      MuscularGroup.findAll({raw: true})
        .then(onSuccess).catch(onError);
    },
    retrieveById: function(muscular_group_id, onSuccess, onError) {
      MuscularGroup.find({where: {id: muscular_group_id}}, {raw: true})
        .then(onSuccess).catch(onError);
    },
    add: function(onSuccess, onError) {
      MuscularGroup.build(buildMuscularGroup(this))
        .save().then(onSuccess).catch(onError);
    },
    updateById: function(muscular_group_id, onSuccess, onError) {
      MuscularGroup.update(buildMuscularGroup(this),{where: {id: muscular_group_id} })
        .then(onSuccess).catch(onError);
    },
    removeById: function(muscular_group_id, onSuccess, onError) {
      MuscularGroup.destroy({where: {id: muscular_group_id}}).then(onSuccess).catch(onError);
    }
  }
});

/**
 * Build a MuscularGroup
 * @param self
 * @returns {{name, createdAt: *|String|Boolean, modifiedAt: *}}
 */
function buildMuscularGroup(self) {
  return {
    name : self.name,
    createdAt : self.createdAt,
    modifiedAt : self.modifiedAt
  }
}

module.exports.muscularGroup = MuscularGroup;