'use strict';
var DataTypes = require("sequelize");
var sequelize = require('../../../config/sequelize').db;
var Routine = sequelize.define('routine', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    get: function () {
      return this.getDataValue('name');
    },
    set: function (val) {
      this.setDataValue('name', val);
    }
  },
  createdAt: DataTypes.DATE,
  modifiedAt: DataTypes.DATE,
  image: DataTypes.STRING,
  description: DataTypes.TEXT
}, {
  freezeTableName: true,
  tableName: 'routine',
  timestamps: false,
  instanceMethods: {
    retrieveAll: function (onSuccess, onError) {
      Routine.findAll({raw: true})
        .then(onSuccess).catch(onError);
    },
    retrieveById: function (routine_id, onSuccess, onError) {
      Routine.find({where: {id: routine_id}}, {raw: true})
        .then(onSuccess).catch(onError);
    },
    add: function (onSuccess, onError) {
      Routine.build(buildRoutine(this))
        .save().then(onSuccess).catch(onError);
    },
    updateById: function (routine_id, onSuccess, onError) {
      Routine.update(buildRoutine(this), {where: {id: routine_id}})
        .then(onSuccess).catch(onError);
    },
    removeById: function (routine_id, onSuccess, onError) {
      Routine.destroy({where: {id: routine_id}}).then(onSuccess).catch(onError);
    },
    retrieveByUserId: function (user_id, onSuccess, onError) {
      var query = 'SELECT c.*, b.active\n' +
        'FROM user a, user_has_routine b, routine c\n' +
        'WHERE a.id = b.user_id\n' +
        'AND c.id = b.routine_id' +
        'AND a.id = :id';
      sequelize.query(query, {
        replacements: {id: user_id},
        type: sequelize.QueryTypes.SELECT
      })
        .then(function (users) {
          onSuccess(users)
        })
        .catch(function (reason) {
          onError(reason);
        })
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
    name: self.name,
    createdAt: self.createdAt,
    modifiedAt: self.modifiedAt,
    image: self.image,
    description: self.description
  }
}

module.exports.routine = Routine;