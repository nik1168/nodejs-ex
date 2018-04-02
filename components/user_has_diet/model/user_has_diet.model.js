'use strict';
var DataTypes = require("sequelize");
var sequelize = require('../../../config/sequelize').db;
var User = require('../../user/model/user.model').user;
var Diet = require('../../diet/model/diet.model').diet;
var UserHasDiet = sequelize.define('userHasDiet', {
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
  diet_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Diet,
      key: 'id'
    }
  },
  active: DataTypes.BOOLEAN,
  startDate: DataTypes.DATEONLY,
  endDate: DataTypes.DATEONLY
}, {
  freezeTableName: true,
  tableName: 'user_has_diet',
  instanceMethods: {
    retrieveAll: function (onSuccess, onError) {
      UserHasDiet.findAll({raw: true})
        .then(onSuccess).catch(onError);
    },
    retrieveById: function (user_has_diet_id, onSuccess, onError) {
      UserHasDiet.find({where: {id: user_has_diet_id}}, {raw: true})
        .then(onSuccess).catch(onError);
    },
    retrieveDietsByUserId: function (user_id, onSuccess, onError) {
      UserHasDiet.findAll({where: {user_id: user_id}}, {raw: true})
        .then(onSuccess).catch(onError);
    },
    retrieveUsersByDiet: function (diet_id, onSuccess, onError) {
      UserHasDiet.findAll({where: {diet_id: diet_id}}, {raw: true})
        .then(onSuccess).catch(onError);
    },
    add: function (onSuccess, onError) {
      UserHasDiet.build(buildUserHasDiet(this))
        .save().then(onSuccess).catch(onError);
    },
    updateById: function (user_has_diet_id, onSuccess, onError) {
      UserHasDiet.update(buildUserHasDiet(this), {where: {id: user_has_diet_id}})
        .then(onSuccess).catch(onError);
    },
    removeById: function (user_id, diet_id, onSuccess, onError) {
      UserHasDiet.destroy({where: {user_id: user_id, diet_id: diet_id}}).then(onSuccess).catch(onError);
    }
  }
});

/**
 * Build a userHasDiet
 * @param self
 * @returns {{name, createdAt: *|String|Boolean, modifiedAt: *}}
 */
function buildUserHasDiet(self) {
  return {
    user_id: self.user_id,
    diet_id: self.diet_id,
    active: self.active,
    startDate: self.startDate,
    endDate: self.endDate
  }
}

UserHasDiet.belongsTo(User,{foreignKey:'user_id'});
UserHasDiet.belongsTo(Diet,{foreignKey:'diet_id'});

module.exports.userHasDiet = UserHasDiet;