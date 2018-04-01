'use strict';
var DataTypes = require("sequelize");
var sequelize = require('../../../config/sequelize').db;
var Diet = sequelize.define('diet', {
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
  tableName: 'diet',
  timestamps: false,
  instanceMethods: {
    retrieveAll: function(onSuccess, onError) {
      Diet.findAll({raw: true})
        .then(onSuccess).catch(onError);
    },
    retrieveById: function(diet_id, onSuccess, onError) {
      Diet.find({where: {id: diet_id}}, {raw: true})
        .then(onSuccess).catch(onError);
    },
    add: function(onSuccess, onError) {
      Diet.build(buildDiet(this))
        .save().then(onSuccess).catch(onError);
    },
    updateById: function(diet_id, onSuccess, onError) {
      Diet.update({},{where: {id: diet_id} })
        .then(onSuccess).catch(onError);
    },
    removeById: function(diet_id, onSuccess, onError) {
      Diet.destroy({where: {id: diet_id}}).then(onSuccess).catch(onError);
    }
  }
});

/**
 * Build a diet
 * @param self
 * @returns {{name, createdAt: *|String|Boolean, modifiedAt: *}}
 */
function buildDiet(self) {
  return {
    name : self.name,
    createdAt : self.createdAt,
    modifiedAt : self.modifiedAt,
    image : self.image,
    description : self.description
  }
}

module.exports.diet = Diet;