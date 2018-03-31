'use strict';
var DataTypes = require("sequelize");
var sequelize = require('../../../config/sequelize').db;
var Role = sequelize.define('role', {
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
  modifiedAt : DataTypes.DATE
},{
  freezeTableName: true,
  tableName: 'role',
  timestamps: false,
  instanceMethods: {
    retrieveAll: function(onSuccess, onError) {
      Role.findAll({raw: true})
        .then(onSuccess).catch(onError);
    },
    retrieveById: function(role_id, onSuccess, onError) {
      Role.find({where: {id: role_id}}, {raw: true})
        .then(onSuccess).catch(onError);
    },
    add: function(onSuccess, onError) {
      Role.build(buildRole(this))
        .save().then(onSuccess).catch(onError);
    },
    updateById: function(role_id, onSuccess, onError) {
      Role.update({},{where: {id: role_id} })
        .then(onSuccess).catch(onError);
    },
    removeById: function(role_id, onSuccess, onError) {
      Role.destroy({where: {id: role_id}}).then(onSuccess).catch(onError);
    }
  }
});

/**
 * Build a role
 * @param self
 * @returns {{name, createdAt: *|String|Boolean, modifiedAt: *}}
 */
function buildRole(self) {
  return {
    name : self.name,
    createdAt : self.createdAt,
    modifiedAt : self.modifiedAt
  }
}

module.exports.role = Role;