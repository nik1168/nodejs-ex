'use strict';
var DataTypes = require("sequelize");
var sequelize = require('../../../config/sequelize').db;
var Category = sequelize.define('category', {
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
  tableName: 'category',
  timestamps: false,
  instanceMethods: {
    retrieveAll: function(onSuccess, onError) {
      Category.findAll({raw: true})
        .then(onSuccess).catch(onError);
    },
    retrieveById: function(category_id, onSuccess, onError) {
      Category.find({where: {id: category_id}}, {raw: true})
        .then(onSuccess).catch(onError);
    },
    add: function(onSuccess, onError) {
      Category.build(buildCategory(this))
        .save().then(onSuccess).catch(onError);
    },
    updateById: function(category_id, onSuccess, onError) {
      Category.update(buildCategory(this),{where: {id: category_id} })
        .then(onSuccess).catch(onError);
    },
    removeById: function(category_id, onSuccess, onError) {
      Category.destroy({where: {id: category_id}}).then(onSuccess).catch(onError);
    }
  }
});

function buildCategory(self) {
  return {
    name : self.name,
    createdAt : self.createdAt,
    modifiedAt : self.modifiedAt
  }
}

module.exports.category = Category;