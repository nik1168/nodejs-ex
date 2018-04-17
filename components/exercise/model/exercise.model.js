'use strict';
var DataTypes = require("sequelize");
var sequelize = require('../../../config/sequelize').db;
var Exercise = sequelize.define('exercise', {
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
  tableName: 'exercise',
  timestamps: false,
  instanceMethods: {
    retrieveAll: function(onSuccess, onError) {
      Exercise.findAll({raw: true})
        .then(onSuccess).catch(onError);
    },
    retrieveById: function(exercise_id, onSuccess, onError) {
      Exercise.find({where: {id: exercise_id}}, {raw: true})
        .then(onSuccess).catch(onError);
    },
    add: function(onSuccess, onError) {
      Exercise.build(buildExercise(this))
        .save().then(onSuccess).catch(onError);
    },
    updateById: function(exercise_id, onSuccess, onError) {
      Exercise.update(buildExercise(this),{where: {id: exercise_id} })
        .then(onSuccess).catch(onError);
    },
    removeById: function(exercise_id, onSuccess, onError) {
      Exercise.destroy({where: {id: exercise_id}}).then(onSuccess).catch(onError);
    }
  }
});

/**
 * Build a exercise
 * @param self
 * @returns {{name, createdAt: *|String|Boolean, modifiedAt: *}}
 */
function buildExercise(self) {
  return {
    name : self.name,
    createdAt : self.createdAt,
    modifiedAt : self.modifiedAt
  }
}

module.exports.exercise = Exercise;