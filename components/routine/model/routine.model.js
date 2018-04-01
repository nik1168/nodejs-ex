'use strict';
var DataTypes = require("sequelize");
var sequelize = require('../../../config/sequelize').db;
var Routine = sequelize.define('routine', {
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
  },
  createdAt: DataTypes.DATE,
  modifiedAt : DataTypes.DATE,
  image : DataTypes.STRING,
  description : DataTypes.TEXT
},{
  freezeTableName: true,
  tableName: 'routine',
  timestamps: false,
  instanceMethods: {
    retrieveAll: function(onSuccess, onError) {
      Routine.findAll({raw: true})
        .then(onSuccess).catch(onError);
    },
    retrieveById: function(routine_id, onSuccess, onError) {
      Routine.find({where: {id: routine_id}}, {raw: true})
        .then(onSuccess).catch(onError);
    },
    add: function(onSuccess, onError) {
      Routine.build(buildRoutine(this))
        .save().then(onSuccess).catch(onError);
    },
    updateById: function(routine_id, onSuccess, onError) {
      Routine.update({},{where: {id: routine_id} })
        .then(onSuccess).catch(onError);
    },
    removeById: function(routine_id, onSuccess, onError) {
      Routine.destroy({where: {id: routine_id}}).then(onSuccess).catch(onError);
    }
  }
});

/**
 * Build a routine
 * @param self
 * @returns {{name, createdAt: *|String|Boolean, modifiedAt: *}}
 */
function buildRoutine(self) {
  return {
    name : self.name,
    createdAt : self.createdAt,
    modifiedAt : self.modifiedAt,
    image : self.image,
    description : self.description
  }
}

module.exports.routine = Routine;