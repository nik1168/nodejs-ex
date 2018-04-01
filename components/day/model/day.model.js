'use strict';
var DataTypes = require("sequelize");
var sequelize = require('../../../config/sequelize').db;
var Day = sequelize.define('day', {
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
  tableName: 'day',
  timestamps: false,
  instanceMethods: {
    retrieveAll: function(onSuccess, onError) {
      Day.findAll({raw: true})
        .then(onSuccess).catch(onError);
    },
    retrieveById: function(day_id, onSuccess, onError) {
      Day.find({where: {id: day_id}}, {raw: true})
        .then(onSuccess).catch(onError);
    },
    add: function(onSuccess, onError) {
      Day.build(buildDay(this))
        .save().then(onSuccess).catch(onError);
    },
    updateById: function(day_id, onSuccess, onError) {
      Day.update(buildDay(this),{where: {id: day_id} })
        .then(onSuccess).catch(onError);
    },
    removeById: function(day_id, onSuccess, onError) {
      Day.destroy({where: {id: day_id}}).then(onSuccess).catch(onError);
    }
  }
});

/**
 * Build a day
 * @param self
 * @returns {{name, createdAt: *|String|Boolean, modifiedAt: *}}
 */
function buildDay(self) {
  return {
    name : self.name
  }
}

module.exports.day = Day;