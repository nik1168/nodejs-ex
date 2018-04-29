'use strict';
var DataTypes = require("sequelize");
var sequelize = require('../../../config/sequelize').db;
var User = require('../../user/model/user.model').user;
var Routine = require('../../routine/model/routine.model').routine;
var UserHasRoutine = sequelize.define('userHasRoutine', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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
      var query = "SELECT b.*,c.active FROM user a, routine b, user_has_routine c\n" +
        "WHERE a.id = c.user_id\n" +
        "AND b.id = c.routine_id\n" +
        "AND a.id = :id";
      sequelize.query(query, {
        replacements: { id: user_id },
        type: sequelize.QueryTypes.SELECT
      })
        .then(function (users) {
          onSuccess(users)
        })
        .catch(function (reason) {
          onError(reason);
        })
    },
    retrieveUsersByRoutine: function (routine_id, onSuccess, onError) {
      var query = "SELECT a.* FROM user a, routine b, user_has_routine c\n" +
        "WHERE a.id = c.user_id\n" +
        "AND b.id = c.routine_id\n" +
        "AND b.id = :id";
      sequelize.query(query, {
        replacements: { id: routine_id },
        type: sequelize.QueryTypes.SELECT
      })
        .then(function (users) {
          onSuccess(users)
        })
        .catch(function (reason) {
          onError(reason);
        })
    },
    add: function (onSuccess, onError) {
      UserHasRoutine.build(buildUserHasRoutine(this))
        .save().then(onSuccess).catch(onError);
    },
    updateById: function (user_has_routine_id, onSuccess, onError) {
      UserHasRoutine.update(buildUserHasRoutine(this), {where: {id: user_has_routine_id}})
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