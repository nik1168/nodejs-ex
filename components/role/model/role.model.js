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
  }
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
// Role.belongsTo(User,{foreignKey:'role_id'});

function buildRole(self) {
  return {
    name : self.name
  }
}

module.exports.role = Role;