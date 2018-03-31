'use strict';
var DataTypes = require("sequelize");
var sequelize = require('../../../config/sequelize').db;
var Muscle = sequelize.define('muscle', {
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
  tableName: 'muscle',
  timestamps: false,
  instanceMethods: {
    retrieveAll: function(onSuccess, onError) {
      Muscle.findAll({raw: true})
        .then(onSuccess).catch(onError);
    },
    retrieveById: function(muscle_id, onSuccess, onError) {
      Muscle.find({where: {id: muscle_id}}, {raw: true})
        .then(onSuccess).catch(onError);
    },
    add: function(onSuccess, onError) {
      Muscle.build(buildMuscle(this))
        .save().then(onSuccess).catch(onError);
    },
    updateById: function(muscle_id, onSuccess, onError) {
      Muscle.update({},{where: {id: muscle_id} })
        .then(onSuccess).catch(onError);
    },
    removeById: function(muscle_id, onSuccess, onError) {
      Muscle.destroy({where: {id: muscle_id}}).then(onSuccess).catch(onError);
    }
  }
});
// Muscle.belongsTo(User,{foreignKey:'muscle_id'});

function buildMuscle(self) {
  return {
    name : self.name,
    createdAt : self.createdAt,
    modifiedAt : self.modifiedAt
  }
}

module.exports.muscle = Muscle;