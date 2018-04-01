'use strict';
var DataTypes = require("sequelize");
var sequelize = require('../../../config/sequelize').db;
var User = require('../../user/model/user.model').user;
var Routine = require('../../routine/model/routine.model').routine;
var UserHasRoutine = sequelize.define('userHasRoutine', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  routine_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Routine,
      key: 'id'
    }
  },
  active: DataTypes.BOOLEAN,
  startDate: DataTypes.DATEONLY,
  endDate: DataTypes.DATEONLY
}, {
  freezeTableName: true,
  tableName: 'user_has_routine',
  instanceMethods: {
    retrieveAll: function (onSuccess, onError) {
      UserHasRoutine.findAll({raw: true})
        .then(onSuccess).catch(onError);
    },
    retrieveById: function (user_has_routine_id, onSuccess, onError) {
      UserHasRoutine.find({where: {id: user_has_routine_id}}, {raw: true})
        .then(onSuccess).catch(onError);
    },
    retrieveRoutinesByUserId: function (user_id, onSuccess, onError) {
      UserHasRoutine.findAll({where: {user_id: user_id}}, {raw: true})
        .then(onSuccess).catch(onError);
    },
    retrieveUsersByRoutine: function (routine_id, onSuccess, onError) {
      UserHasRoutine.findAll({where: {routine_id: routine_id}}, {raw: true})
        .then(onSuccess).catch(onError);
    },
    add: function (onSuccess, onError) {
      UserHasRoutine.build(buildUserHasRoutine(this))
        .save().then(onSuccess).catch(onError);
    },
    updateById: function (user_has_routine_id, onSuccess, onError) {
      UserHasRoutine.update({}, {where: {id: user_has_routine_id}})
        .then(onSuccess).catch(onError);
    },
    removeById: function (user_id, routine_id, onSuccess, onError) {
      UserHasRoutine.destroy({where: {user_id: user_id, routine_id: routine_id}}).then(onSuccess).catch(onError);
    }
  }
});

/**
 * Build a userHasRoutine
 * @param self
 * @returns {{name, createdAt: *|String|Boolean, modifiedAt: *}}
 */
function buildUserHasRoutine(self) {
  return {
    user_id: self.user_id,
    routine_id: self.routine_id,
    active: self.active,
    startDate: self.startDate,
    endDate: self.endDate
  }
}

UserHasRoutine.belongsTo(User,{foreignKey:'user_id'});
UserHasRoutine.belongsTo(Routine,{foreignKey:'routine_id'});

module.exports.userHasRoutine = UserHasRoutine;